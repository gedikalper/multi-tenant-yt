import "server-only";

import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function getArticles() {
  const { getUser, getOrganization } = getKindeServerSession();
  const user = await getUser();
  const organization = await getOrganization();
  if (!user) {
    redirect("/api/auth/register");
  }
  const articles = await prisma.article.findMany({
    where: {
      orgId: organization?.orgCode,
    },
  });

  return articles;
}
