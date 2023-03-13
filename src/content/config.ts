import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
});

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectsCollection = defineCollection({ schema: blogSchema });

export const collections = {
    'blog': blogCollection,
    'projects': projectsCollection
}