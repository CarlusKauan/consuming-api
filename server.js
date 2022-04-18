const express = require('express')
const cors = require('cors')
const app = express()
// fecth do back
const axios = require('axios')

app.use(cors())

// Servindo api
app.get('/', async (req, res) => {

    // response é a resposta do axios, mas eu tiro o data de dentro do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')

    return res.json(data)
})

app.listen('4567', (req, res) => console.log('running 🚀'))