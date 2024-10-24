//require('dotenv').config()
//import { config } from 'dotenv'
//const express = require('express')
import express from 'express'
const app = express()
const port = 8080


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/Twitter', (req, res) => {
    res.send("kevalnai")
})


app.get('/Insta', (req, res) => {
    res.send("kevalnai")
})

app.get("/Login", (req, res) => {
    res.send('<h1>Please Login first</h1>')
})

app.get('/Jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "joke 1",
            "Content": "This a joke 1"
        },
        {
            "id": 2,
            "title": "joke 2",
            "Content": "This a joke 2"
        },
        {
            "id": 3,
            "title": "joke 3",
            "Content": "This a joke 3"
        },
        {
            "id": 4,
            "title": "joke 4",
            "Content": "This a joke 4"
        },
        {
            "id": 5,
            "title": "joke 5",
            "Content": "This a joke 5"
        }
    ]
    res.json(jokes)
})

app.listen(process.env.PORT || port, () => {
    console.log(`serve http://localhost:${port}`)
})