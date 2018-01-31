require('dotenv').config()
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// variavel express
// configuracao
server.set('view engine', 'ejs')


// plugin do express
server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors())

// exportando
module.exports = server
