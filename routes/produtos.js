const getConnection = require('../db/connection')

module.exports = function (server){
    server.get('/produtos', function(req, res){
        const connection = getConnection()

       connection.query('select * from livros', function(erro, resultado){
            if(erro == null){
                res.render('produtos/lista', {
                    livros: resultado
                })                
            } else {
                console.error(erro)
                res.send('Deu ruim')
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

        connection.query('INSERT INTO livros SET ?', livro, 
            (error, result, fields) =>{
                if (!error) {
                    res.redirect('/produtos')
                } else {
                    res.render('error', { error })
                }
            }
        )

        connection.end()
    })
}