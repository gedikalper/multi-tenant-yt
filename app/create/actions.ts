"use server";

import { ArticleSchemaType, createArticleSchema } from "@/lib/zodSchemas";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createArticle(values: ArticleSchemaType) {
  const { getUser, getPermission } = getKindeServerSession();
  const user = await getUser();
  const permission = await getPermission("create:article");
  if (!user) {
    redirect("/api/auth/register");
  }

  if (!permission?.isGranted) {
    redirect("/");
  }

  const result = createArticleSchema.safeParse(values);
  if (!result.success) {
    throw new Error("Invalid form data");
  }

  const article = await prisma.article.create({
    data: {
      title: result.data.title,
      content: result.data.content,
      imageUrl: result.data.imageUrl,
      orgId: permission.orgCode as string,
      userId: user.id,
    },
  });

  revalidatePath("/articles");
  return redirect("/articles");
}
