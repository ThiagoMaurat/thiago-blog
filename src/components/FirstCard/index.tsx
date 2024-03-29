import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import { FindAllPostsOutput } from "@/server/repositories/post-repository";

type FirstCardProps = {
  data: FindAllPostsOutput["posts"][0];
  href: string;
};
export function FirstCard(props: FirstCardProps) {
  const { data, href } = props;

  if (!data) return null;

  const { author, publishedAt, description, thumbnail, themes, title } = data;

  return (
    <Link href={href} prefetch={false}>
      <div className="grid grid-cols-2 gap-6 overflow-hidden hover:scale-105 transition-all duration-300">
        <div>
          <Image
            width={550}
            height={370}
            className="object-cover  rounded-2xl h-40vh w-full"
            alt="last-post-thumbnail"
            src={thumbnail}
          />
        </div>

        <div className="py-4 flex flex-col gap-4">
          {themes?.map((theme, index) => {
            return (
              <p
                key={`theme-${index}`}
                className="font-medium text-blue-300 text-lg"
              >
                {theme.themes.name}
              </p>
            );
          })}

          <h2 className={`font-bold text-2xl`}>{title}</h2>

          {description && (
            <p className="line-clamp-3 font-semibold text-sm">{description}</p>
          )}

          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/76444984?v=4"
              alt="Thiago Maurat"
            />

            <div className="flex flex-col gap-1">
              <p className="font-bold text-sm">{author?.name}</p>

              {publishedAt && (
                <p className="text-muted-foreground text-sm">
                  {format(publishedAt, "dd/MM/yyyy, 'às' HH:mm.")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
