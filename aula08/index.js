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

   // await db.inseriClientes({nome:nom,idade:ida})

   //atualizando clientes
   
    // const id=4
    // const nom="lndrhrsh"
    // const ida=28
    
    // await db.atualizaClientes(id,{nome:nom,idade:ida})
    // console.log('cliente' +id+ 'atualizado')


   //deletando clientes
     
    const id=3
    await db.deletarClientes(id)
    console.log('Cliente' + id + 'foi deletado do banco de dados')

    

    console.log("Obter todos os clientes")
    const clientes=await db.todosClientes()
    console.log(clientes)
})()