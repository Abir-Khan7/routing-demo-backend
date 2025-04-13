import express from 'express'

const app = express()
const port = 4300

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Now listening on port ${4300}\n`)
})