//Upload de arquivos em Node com o módulo formidable [Formidable] - Curso de Node - Aula 12

const http=require('http')
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')

const servidor=http.createServer((req,res)=>{
if(req.url == '/envioDeArquivo'){
    const form = new formidavel.IncomingForm()
    form.parse(req, (erro, campos, arquivos)=>{
     
        const urlantiga = arquivos.filetoupload[0].filepath
        const urlnova = "C:/Users/luan9/" + arquivos.filetoupload[0].originalFilename

        fs.copyFile(urlantiga, urlnova,(erro)=>{
            if(erro) {throw erro}
               
                res.write('Arquivo movido!')
                res.end()
           
            
            
        })
    })

}else{

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<form action="EnvioDeArquivo" method="post" enctype="multipart/from-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit" value="Enviar">')
    res.write('</form>')
    return res.end()

}



})
servidor.listen(porta)