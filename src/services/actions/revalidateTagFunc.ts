"use server";

import { revalidateTag } from "next/cache";

export async function revalidateTagFunc(tag: string) {
  await revalidateTag(tag);
}
