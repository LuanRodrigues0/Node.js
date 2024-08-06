//Usando mongoDB com Node [mongodb] - Curso de Node - Aula 14

const {MongoClient,ServerApiVersion }=require('mongodb'); 
const url="mongodb+srv://maldoguinho18:MHWWORLD@nodecfbcursos.9vloeck.mongodb.net/?retryWrites=true&w=majority&appName=NodeCfbCursos"
     async function run(){
        const client = new MongoClient(url,{
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });
     
    try{
        await client.connect();

        const dbo=client.db("CfbCursos")
        const obj={Curso:"Curso de JavaScript", Canal:"CFB Cursos"}
        const colecao="cursos"
        
      //Para inserir Cursos
        // await dbo.collection(colecao).insertOne(obj);
        // console.log("1 novo curso foi inserido");

      //Para encontrar cursos    //findeOne retorna o primeiro registro que conhecidiu com busca.
        await dbo.collection(colecao).findOne({},(erro,resultado)=>{
            if(erro) throw erro
            console.log(resultado);  
        })
              
    }finally{
        await client.close();
    }
}

run().catch(console.dir);
