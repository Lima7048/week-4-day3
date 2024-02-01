import express from "express"
const db = new Database("database.db");
import Database from "better-sqlite3";
const app = express()
app.use = (express.json())
const PORT = 7070

const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);


app.get('querytest', (req, res) => {
    console.log(req.query)
})

app.post('/movies', (req, res) => {
    try {
        const movie = req.body.movie
        const year = req.body.year
        console.log(year)
        const newMovie = db.prepare('INSERT INTO movies (movie,year) VALUES (?,?)').run(movie, year)
        res.status(200).json(newMovie)

    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.listen(PORT, () => {
    console.log(`	( ˘ ³˘)ノ°ﾟº❍｡serverstarted on port: ${PORT}`)
})