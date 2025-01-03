"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData) {
  const email = "jon";
  const title = formData.get("title");
  const content = formData.get("content");
  const slug = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      author: {
        connect: {
          email,
        },
      },
    },
  });
  revalidatePath("/posts");
}
