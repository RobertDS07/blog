import { z } from "astro:content";

const feedbackSchema = z.object({
  name: z.string(),
  feedback: z.string(),
  photoUrl: z.string(),
  socialNetworkLink: z.string(),
  socialNetworkText: z.string(),
  createdAt: z.string(),
});

export default feedbackSchema;
