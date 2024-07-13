//Criando Rotas no Servidor Node [NodeJS] - Curso de Node - Aula 03

const http = require("http");
const porta = 3000;
const host ='127.0.0.1';

const Servidor = http.createServer((req,res)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      if(req.url=='/'){
            res.write('<h1>Seja bem Vindo!</h1>');
      }else if(req.url=='/canal'){
            res.write('<h1>CFBCursos</h1>');
      }if(req.url=='/curso'){
            res.write('<h1>Veja os cursos do canal</h1>');
      }else if(req.url=='/curso/node'){
            res.write('<h1>Curso De Node</h1>');
      }
      res.end();
});

Servidor.listen(porta,host,()=>{console.log("Servidor Rodando")});