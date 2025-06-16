const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./vagas.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS vagas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      endereco TEXT NOT NULL,
      horario TEXT NOT NULL,
      disponivel INTEGER DEFAULT 1
    );
  `);
});

module.exports = db;
