import { defineCollection, z } from "astro:content";
import { techNames } from "layouts/ProjectLayout/Subcomponents/TechStackGrid/utils/techNameToImg";

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
    stack: z.array(
      z.custom<(typeof techNames)[number]>((name: string) =>
        techNames.includes(name as any)
      )
    ),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = { projects };
