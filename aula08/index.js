//Node com banco MySQL - módulo mysql2 #P1-A [Node e MySQL] - Curso de Node - Aula 08

//Node com banco MySQL - módulo mysql2 #P2-A [Node e MySQL] - Curso de Node - Aula 09

// Node com banco MySQL - módulo mysql2 #P3-A [Node e MySQL] - Curso de Node - Aula 10

(async ()=>{
    const db=require('./db')

    //Inserindo novos clientes
    //const db=require('./db')
    //console.log("Inserir novo cliente")
    //const nom="lndrhrsh"
    //const ida=28

   // await db.InseriClientes({nome:nom,idade:ida})


   
    
    const nom="lndrhrsh"
    const ida=28
    const id=2
    await db.InseriClientes({nome:nom,idade:ida})
    console.log('cliente' + 'atualizado')


    console.log("Obter todos os clientes")
    const clientes=await db.TodosClientes()
    console.log(clientes)
})()