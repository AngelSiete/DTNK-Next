import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";

const db = sql("songs.db");

export function getSongs() {
  const songs = db.prepare("SELECT * FROM songs").all();
  return songs;
}

export function getSong(slug) {
  const song = db.prepare("SELECT * FROM songs WHERE SLUG = ?").get(slug);
  return song;
}

export async function saveSong(song) {
  song.slug = slugify(song.title, { lower: true });
  const extension = song.image.name.split(".").pop();
  const fileName = `${song.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await song.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) console.log(error);
  });
  song.image = `/images/${fileName}`;
  db.prepare(
    `
        INSERT INTO songs
        (title, image, date, producer, slug)
        VALUES (
        @title,
        @image,
        @date,
        @producer,
        @slug)
        `
  ).run(song);
}
