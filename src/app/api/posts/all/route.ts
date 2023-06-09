import { NextResponse } from "next/server";
import { makePostUseCase } from "@/server/factories/make-post-use-case";
import { UserDoesNotExistsError } from "@/server/errors/user-does-not-exist";
import { UserIsNotAdminError } from "@/server/errors/user-is-not-admin-error";
import { z } from "zod";

export async function GET(req: Request, res: Response) {
  const postUseCase = makePostUseCase();

  const queryParams = new URL(req.url).searchParams;

  const pageParams = queryParams.get("page");
  const limitParams = queryParams.get("limit");
  const searchParams = queryParams.get("search");

  const paginationSchema = z.object({
    page: z.coerce.number().optional().nullable(),
    limit: z.coerce.number().optional().nullable(),
    search: z.string().optional().nullable(),
  });

  try {
    const { limit, page, search } = await paginationSchema.parseAsync({
      page: pageParams,
      limit: limitParams,
      search: searchParams,
    });

    const allPosts = await postUseCase.findAll(page, limit, search);

    return NextResponse.json({ posts: allPosts }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: error,
        },
        { status: 400 }
      );
    }

    if (error instanceof UserDoesNotExistsError) {
      return NextResponse.json(
        {
          message: "User does not exist",
        },
        { status: 400 }
      );
    }

    if (error instanceof UserIsNotAdminError) {
      return NextResponse.json(
        {
          message: "User is not admin",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Error listing posts",
      },
      { status: 500 }
    );
  }
}
