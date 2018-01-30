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
}