import { z, reference } from "astro:content";

const blogPostSchema = z.object({
  title: z.string(),
  imageUrl: z.string(),
  description: z.string(),
  tags: z.array(z.enum(["astro", "solid", "aws"])),
  timeToReadInMinutes: z.number(),
  relatedPosts: z.array(reference("posts")).optional(),
  createdAt: z.string(),
});

export default blogPostSchema;
