import { FaPen } from "react-icons/fa";
import React from "react";
import { useRouter } from "next/navigation";
import { NavIndices } from "./NavIndicces";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import clsx from "clsx";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const footerClassName = clsx(
    "w-full",
    "grid",
    "gap-12",
    "px-4",
    "md:grid-cols-2",
    "lg:grid-cols-4",
    className
  );

  const { push } = useRouter();

  return (
    <footer className={footerClassName}>
      <div className="flex flex-col gap-4">
        <h1
          className="font-bold text-2xl text-gray-900 cursor-pointer"
          onClick={() => push("/")}
        >
          Thiago🚀Dev
        </h1>

        <p className="font-medium text-lg text-gray-700 break-words">
          Olá amigos desenvolvedores!! Fique à vontade para deixar seus
          comentários e sugestões sobre o conteúdo do nosso blog.
        </p>
      </div>

      <div className="flex flex-col md:items-center gap-4">
        <h1 className="font-bold text-2xl text-gray-900">Início</h1>

        <div className="flex gap-2 flex-col">
          <NavIndices isExternal={false} href="" text="Topic #1" />
          <NavIndices isExternal={false} href="" text="Topic #2" />
          <NavIndices isExternal={false} href="" text="Topic #3" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-gray-900">NewsLetter</h1>
        <p className="font-medium text-lg text-gray-700 break-words">
          Inscreva-se em nossa newsletter! Fique por dentro das últimas
          novidades do mundo dev.
        </p>

        <div className="flex items-center">
          <input
            className="rounded-full focus:outline-none border border-gray-300 py-2 px-4 placeholder-gray-400"
            type="input"
            placeholder="E-mail"
            // value={newsletterInput}
            // onChange={(e) => setNewsletterInput(e.target.value)}
          />

          <div className="ml-1">
            <button
              className="p-1 bg-transparent"
              onClick={() => console.log("asd")}
            >
              <MdArrowForward size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:items-center">
        <h1 className="font-bold text-2xl text-gray-900">Contato</h1>
        <div className="flex gap-2 flex-col items-start">
          <NavIndices
            href="https://github.com/ThiagoMaurat"
            LeftIcon={BsGithub}
            text="GitHub"
            isExternal
          />

          <NavIndices
            href="mailto:thiagomaurat@hotmail.com"
            LeftIcon={FaPen}
            text="E-mail"
            isExternal
          />

          <NavIndices
            href="https://www.facebook.com/thiago.maurat"
            LeftIcon={BsFacebook}
            text="Facebook"
            isExternal
          />

          <NavIndices
            href="https://twitter.com/Thiago_Maurat"
            LeftIcon={BsTwitter}
            text="Twitter"
            isExternal
          />
        </div>
      </div>
    </footer>

    // <HStack my="2rem" justifyContent={"center"}>
    //   <Text
    //     fontWeight={"500"}
    //     fontSize="1rem"
    //     color={"gray.700"}
    //   >{`© ${new Date().getFullYear()} Todos os direitos reservados. Thiago Maurat.`}</Text>
    // </HStack>
  );
};
