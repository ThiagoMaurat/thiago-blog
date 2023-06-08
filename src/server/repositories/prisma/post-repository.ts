import { prisma } from "@/lib/prisma";
import { Post, Prisma } from "@prisma/client";
import { PostRepository } from "../post-repository";

export class PrismaPostRepository implements PostRepository {
  async create(data: Prisma.PostCreateInput): Promise<Post> {
    const createPost = await prisma.post.create({
      data: {
        ...data,
      },
    });

    if (!createPost) {
      throw new Error("Couldnt create post");
    }

    return createPost;
  }

  async find(id: string): Promise<Post | null> {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return post;
  }

  async findAll(page?: number, limit?: number) {
    const pageSizeFindAll = limit ?? 0;
    const pageFindAll = page ?? 9999999;

    const offset = (pageFindAll - 1) * pageSizeFindAll;

    const posts = await prisma.post.findMany({
      skip: page && limit ? offset : undefined,
      take: limit ? limit : undefined,
      select: {
        id: true,
        title: true,
        content: true,
        publishedAt: true,
        description: true,
        thumbnail: true,
        author: {
          select: {
            name: true,
            image: true,
          },
        },
        themes: {
          select: {
            themes: true,
          },
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
    });

    return posts;
  }
}
