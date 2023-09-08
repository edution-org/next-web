"use server";

import { revalidatePath } from "next/cache";
import { zact } from "zact/server";
import { z } from "zod";

import { db, desc, eq, schema } from "@acme/db";

export async function getPosts() {
  return db.query.post.findMany({ orderBy: desc(schema.post.id) });
}

export const deletePost = zact(z.number())(async (id) => {
  await db.delete(schema.post).where(eq(schema.post.id, id));
  revalidatePath("/");
});

export const createPost = zact(
  z.object({
    title: z.string().min(1),
    content: z.string().min(1),
  }),
)(async (data) => {
  await db.insert(schema.post).values(data);
  revalidatePath("/");
});
