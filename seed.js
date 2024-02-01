import Database from "better-sqlite3";
const db = new Database("database.db");


db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    name TEXT,
    message TEXT
  )
`);


const insertStatement = db.prepare(
    `INSERT INTO messages (name, message) VALUES (?, ?)`
);

insertStatement.run('Spongebob', 'Hey Gary');
insertStatement.run('Sandy', 'Hey Spongebob');
insertStatement.run('Squidward', 'These krabby patties arent for sale');


const update = db.prepare(
    `UPDATE INTO messages (name, message) VALUES (?,?)`
)

update.run('Shrek', '2004');