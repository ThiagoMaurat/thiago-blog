"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import {
  CreateThemeSchemaType,
  CreateThemeTypeOutput,
  createThemeSchema,
} from "./schema.";
import { makeCreateThemeUseCase } from "@/server/factories/make-create-theme-use-case";
import { revalidatePath } from "next/cache";

const handler = async (
  data: CreateThemeSchemaType
): Promise<CreateThemeTypeOutput> => {
  const createThemeUseCase = makeCreateThemeUseCase();

  const themes = await createThemeUseCase.execute(data);

  revalidatePath("/admin");

  return {
    data: themes,
  };
};

export const createThemesAction = createSafeAction(createThemeSchema, handler);
