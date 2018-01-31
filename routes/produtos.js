const LivrosDao = require('../dao/LivrosDao.js')


module.exports = function (server){
    server.get('/produtos', function(req, res){
        const livrosDao = new LivrosDao()

        livrosDao.getAll(function(erro, livros) {
            if(!erro) {
                res.render('produtos/lista', { livros })
            } else {
                res.send(erro)
            }
        })
    })

    server.get('/produtos/form', (req, res) => {
        res.render('produtos/form')
    })

    server.post('/produtos', (req, res) => {
        const livro = req.body
        const livrosDao = new LivrosDao()

        livrosDao.save(livro, (erro) => {
            if(!erro) {
                res.redirect('/produtos')
            } else {
                res.send(erro)
            }
        })
    })
}