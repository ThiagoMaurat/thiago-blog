import { PrismaPostRepository } from "../repositories/prisma/post-repository";
import { PostUseCase } from "../use-cases/Posts/post";

export function makePostUseCase() {
  const prismaPostRepository = new PrismaPostRepository();
  const makePostUseCase = new PostUseCase(prismaPostRepository);

  return makePostUseCase;
}
