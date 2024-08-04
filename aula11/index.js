const http= require('http')
const eventos=require('events')
const eventoEmissor=new eventos.EventEmitter()

const final=()=>{console.log('Fim do processo')}

eventoEmissor.on('msg',()=>{console.log("Curso do node")})
eventoEmissor.on('Fim',final)

const porta=process.env.PORT || 3000
const retorno=()=>{console.log('Servidor Rodando')}
const servidor=http.createServer((req,res)=>{
    eventoEmissor.emit('msg')
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('CFBCURSOS')
    eventoEmissor.emit('Fim')
    res.end()
})
servidor.listen(porta,retorno)