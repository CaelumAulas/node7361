const server = require('./server')

require("./routes/produtos")(server)

server.listen(3000, function(){
    console.log("Levantou")
})

