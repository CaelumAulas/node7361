const mysql = require('mysql')

module.exports = function(){
    return mysql.createConnection({
        database: process.env.DB_NAME, 
        user: process.env.DB_USER, 
        password: process.env.DB_PASS, 
        host: process.env.DB_HOST
    })
}