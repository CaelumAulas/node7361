const LivrosDao = require('../dao/LivrosDao.js')
const LivrosController = require('../controller/LivrosController')
const request = require('request')

module.exports = function (server){
    server.use((req, res, next) => {
        console.log(req.url)
        console.log(req.ip)
        next()
    })

    server.get('/produtos', LivrosController.getAll)
    server.get('/produtos/form', (req, res) => res.render('produtos/form'))
    server.post('/produtos', LivrosController.save)
    server.get('/promocao', (req, res) => {
      request.post('http://localhost:3004/msg', {form: {msg: 'Promoção, entre na http://casadocodigo.com.br'}})
      res.send('foi a promocao')
    })

    server.use((req, res) => {
        res.render('404')
    })
}
