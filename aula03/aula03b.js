var http = require('http');
var url = require('url');
http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Conten-Type': 'appliction/json' });

let parametros=url.parse(req.url, true);
 let mat=parametros.query.matricula;
  let pas=parametros.query.senha;

  let dados=null

   if(mat=="123" && pas=="321"){
     dados={
       nome:"Luan",
       acesso:18
     }
   }
  res.end(JSON.stringify(dados));
}).listen(8080);