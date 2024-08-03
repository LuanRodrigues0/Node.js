const http= require('http')
const eventos=require('events')
const eventoEmissor=new eventos.eventoEmissor()

const final=()=>{console.log('Fim do processo')}

eventoEmissor.on('msg',()=>{console.log("Curso do node")})
eventoEmissor.on('Fim',final)

const porta=process.env.PORT || 3000
const retorno=()=>{console.log('Servidor Rodando')}
const servidor=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('CFBCURSOS')
    event
    res.end()
})
servidor.listen(porta,retorno)