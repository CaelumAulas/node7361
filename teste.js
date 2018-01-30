const http = require("http")
const fs = require("fs")


// Função anônima
// Funções de callback
// handler
const server = http.createServer(function (req, resp){
    resp.writeHead(200, {
        "Content-Type" : "text/html"
    })
    
    if(req.url == "/produtos"){

        fs.read("./produtos.ejs", function(){
            res.end(conteudo)
        })
    }


    fs.read("./promocoes.html", function(){
        res.end(conteudo)
    })

    
})

server.listen(3000, "localhost", function (){
    console.log("Levantou em localhost:3000")
})