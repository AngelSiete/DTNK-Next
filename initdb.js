const sql = require('better-sqlite3');
const db = sql('songs.db');

const songs = [
  {
    title: 'Junkie',
    slug: 'junkie',
    image: '/images/junkie.jpg',
    date: '2018',
    producer: ''
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS songs (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       date TEXT NOT NULL,
       producer TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO songs VALUES (
         null,
         @slug,
         @title,
         @image,
         @date,
         @producer
      )
   `);

  for (const song of songs) {
    stmt.run(song);
  }
}

initData();