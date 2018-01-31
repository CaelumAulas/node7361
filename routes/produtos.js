const LivrosDao = require('../dao/LivrosDao.js')
const getConnection = require('../db/connection')

module.exports = function (server){
    server.get('/produtos', function(req, res){
        const connection = getConnection()
        const livrosDao = new LivrosDao(connection)

        livrosDao.getAll(function(erro, livros) {
            if(!erro) {
                res.render('produtos/lista', { livros })
            } else {
                res.send(erro)
            }
        })

        connection.end()
    })

    server.get('/produtos/form', (req, res) => {
        res.render('produtos/form')
    })

    server.post('/produtos', (req, res) => {
        const livro = req.body
        const connection = getConnection()
        const livrosDao = new LivrosDao(connection)

        livrosDao.save(livro, (erro) => {
            if(!erro) {
                res.redirect('/produtos')
            } else {
                res.send(erro)
            }
        })

        connection.end()
    })
}