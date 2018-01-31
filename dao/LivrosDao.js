const getConnection = require('../db/connection')

class LivrosDao {
  getAll(callback) {
    const connection = getConnection()

    // this.connection.query('SELECT * FROM livros', function(erro, resultado) {
    //   callback(erro, resultado)
    // })
    connection.query('SELECT * FROM livros', callback)

    connection.end()
  }

  save(livro, callback) {
    const connection = getConnection()

    connection.query('INSERT INTO livros SET ?', livro, callback)

    connection.end()
  }
}

module.exports = LivrosDao
