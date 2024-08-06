//Usando mongoDB com Node [mongodb] - Curso de Node - Aula 13

const {MongoClient}=require('mongodb'); 
const url="mongodb+srv://maldoguinho18:MHWWORLD@nodecfbcursos.9vloeck.mongodb.net/?retryWrites=true&w=majority&appName=NodeCfbCursos"
     async function run(){
        const client = new MongoClient(url);
     
    try{
        await client.connect();

        const dbo=client.db("CfbCursos")
        const obj={Curso:"Curso de MYSQL", Canal:"CFB Cursos"}
        const colecao="cursos"
        await dbo.collection(colecao).insertOne(obj);
        console.log("1 novo curso foi inserido");
        
    }finally{
        await client.close();
    }
}

run().catch(console.dir);
