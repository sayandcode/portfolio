import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    endDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    rawContentUrl: z.string(),
    liveUrl: z.string(),
    repoUrl: z.string(),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = { projects };
