"use server";

import { saveSong } from "./songs";

export async function shareSong(formData) {
  const song = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    producer: formData.get("producer"),
  };
  console.log(song)
  await saveSong(song);
}
