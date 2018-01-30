const mysql = require("mysql")

console.log("Executou o arquivo de conexao")

module.exports = function(){
    console.log("Criou a conexao")
    return mysql.createConnection({
        database: "cdc", 
        user: "root", 
        password: "", 
        host: "localhost",
        port: 32768
    })
}