import express from 'express'
import {getNotes, getNote, createNote} from './database.js'
const app = express()

app.get("/notes", async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
