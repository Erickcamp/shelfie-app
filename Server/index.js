require("dotenv").config();
const express = require("express");
const massive = require("massive");

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},
})
    .then((db) => {
        app.set('db', db)
        console.log('db connected')
    })

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`Listening on server port ${SERVER_PORT}`)
})