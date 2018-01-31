const LivrosDao = require('../dao/LivrosDao.js')
const LivrosController = require('../controller/LivrosController')

module.exports = function (server){
    server.use((req, res, next) => {
        console.log(req.url)
        console.log(req.ip)
        next()
    })
    server.get('/produtos', LivrosController.getAll)
    server.get('/produtos/form', (req, res) => res.render('produtos/form'))
    server.post('/produtos', LivrosController.save)
    server.use((req, res) => {
        res.render('404')
    })
}