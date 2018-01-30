require('dotenv').config()
const express = require('express')
const server = express()
const bodyParser = require('body-parser')

// variavel express
// configuracao
server.set('view engine', 'ejs')


// plugin do express
server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: true}))

// exportando
module.exports = server
