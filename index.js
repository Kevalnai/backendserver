const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/Twitter', (req, res) => {
    res.send("kevalnai")
})

app.get("/Login",(req, res) => {
    res.send('<h1>Please Login first</h1>')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})