import { defineCollection } from "astro:content";

import blogPostSchema from "./_schemas/blogPost.schema";
import feedbackSchema from "./_schemas/feedback.schema";

const postsCollection = defineCollection({
  type: "content",
  schema: blogPostSchema,
});

const feedbacksCollection = defineCollection({
  type: "data",
  schema: feedbackSchema,
});

export const collections = {
  posts: postsCollection,
  feedbacks: feedbacksCollection,
};
