require('dotenv').config()
const express = require('express')
const server = express()

// variavel express
// configuracao
server.set('view engine', 'ejs')

// plugin do express
server.use(express.static('public'))

// exportando
module.exports = server
