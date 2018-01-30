const getConnection = require('../db/connection')

class LivrosDao {
  getAll(callback) {
    const connection = getConnection()

    // connection.query('SELECT * FROM livros', function(erro, resultado) {
    //   callback(erro, resultado)
    // })
    connection.query('SELECT * FROM livros', callback )
    
    connection.end()
  }

  save() {

  }
}

module.exports = LivrosDao
