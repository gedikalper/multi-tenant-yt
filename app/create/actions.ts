"use server";

import { ArticleSchemaType, createArticleSchema } from "@/lib/zodSchemas";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";

export async function createArticle(values: ArticleSchemaType) {
  const result = createArticleSchema.safeParse(values);
  if (!result.success) {
    throw new Error("Invalid form data");
  }

  const article = await prisma.article.create({
    data: {
      title: result.data.title,
      content: result.data.content,
      imageUrl: result.data.imageUrl,
      orgId: "demo org id",
      userId: "demo user id",
    },
  });

  revalidatePath("/articles");
  return redirect("/articles");
}
