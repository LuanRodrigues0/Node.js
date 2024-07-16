const express=require('express')
const rotas=express.Router()

let cursosInfo=[
    {'curso':'Node','info':'Curso De Node.js'},
    {'curso':'PHP','info':'Curso De PHP'},
    {'curso':'Javascript','info':'Curso de Javascript'},
    {'curso':'React','info':'Curso De React'},{'curso':'MYSQL','info':'Curso De MYSQL'}
]

rotas.get('/',(req,res)=>{
    res.json({Ola: 'Seja Bem-Vindo'})
})

//Não esqueça do :
rotas.get('/:cursoid',(req,res)=>{
    const curso=req.params.cursoid
    const cursoI = cursosInfo.find(i=>i.curso == curso)
    if(!cursoI){
        res.status(404).json(
          {erro:'Curso não encontrado', CursoProcurado:curso.toUpperCase()}
        )
    }else{
        res.status(200).json(cursoI)
    }
})

module.exports = rotas

 

 