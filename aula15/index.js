//Usando mongoDB com Node [mongodb] - Curso de Node - Aula 15

const {MongoClient}=require('mongodb'); 
const url="mongodb+srv://maldoguinho18:MHWWORLD@nodecfbcursos.9vloeck.mongodb.net/?retryWrites=true&w=majority&appName=NodeCfbCursos"
     async function run(){
        const client = new MongoClient(url);
     
    try{
        await client.connect();

       const dbo=client.db("CfbCursos")
       const obj={Curso:"Curso de JavaScript", Canal:"CFB Cursos"}
       const colecao="cursos"
        
       //Para inserir Cursos
       // await dbo.collection(colecao).insertOne(obj);
       // console.log("1 novo curso foi inserido");

       const query={curso:'Curso de Node'}
         await dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
          if(erro) throw erro
          console.log(resultado)
          
        })
              
    }finally{
        await client.close();
    }
}

run().catch(console.dir);
