const LivrosDao = require('../dao/LivrosDao.js')

class LivrosController {
  getAll(req, res) {
    const livrosDao = new LivrosDao()

    livrosDao.getAll(function(erro, livros) {
        if(!erro) {
            res.format({
                html: () => {
                    res.render('produtos/lista', { livros })
                },
                json: () => {
                    res.json(livros)
                }
            })
            
        } else {
            res.send(erro)
        }
    })
  }

  save(req, res) {
    const livro = req.body
    const livrosDao = new LivrosDao()

    livrosDao.save(livro, (erro) => {
        if(!erro) {
            res.redirect('/produtos')
        } else {
            res.send(erro)
        }
    })
  }
}

module.exports = new LivrosController()