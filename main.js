//https://github.com/CaelumAulas/node7361
const server = require('./server')
const port = 3000

// const funcao = require('./routes/produtos')
// funcao(server)
require('./routes/produtos')(server)

server.listen(port, function(){
	// console.log('Servidor de pé em http://localhost:' + port)
	console.log(`Servidor de pé em http://localhost:${port}`)
	console.log('Pra derrubar o servirdor: ctrl + c')
})
