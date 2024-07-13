const http = require("http");

http.createServer((request,resposta)=>{
      resposta.writeHead(200,{'content-Type': 'text/plain'

      });
      resposta.write('CFB Cursos\n Curso de Node');
      resposta.end();
}).listen(1232);
