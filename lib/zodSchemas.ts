import { z } from "zod";

export const createArticleSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  imageUrl: z.string().min(1),
});

export type ArticleSchemaType = z.infer<typeof createArticleSchema>;
