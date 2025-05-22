import "server-only";

import { prisma } from "@/lib/db";

export async function getArticles() {
  const articles = await prisma.article.findMany({
    where: {
      orgId: "adsf",
    },
  });

  return articles;
}
