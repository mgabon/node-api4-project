
const express = require('express')
const cors = require('cors')

const server = express()
require('dotenv').config();

const PORT = process.env.PORT || 8000

server.use(express.json())
server.use(cors())

server.get('/api/greet', (req, res) => {
    res.json({message: "api is working"})
})

server.use('*', (req, res) => {
    res.send('<h1>Welcome!</h1>')
})

server.use((err, req, res ,next) => {
res.status(500).json({
    message: err.message,
    stack: err.stack,
})
})