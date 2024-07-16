//Criando Rotas usando Express [NodeJS] - Curso de Node - Aula 04

const http = require('http');
const porta=process.env.PORT;

const servidor=http.createServer((req,res)=>{
    res.statusCode=200
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('CFB Cursos')
});

servidor.listen(porta || 3000,()=>{console.log("Servidor Rodando")});