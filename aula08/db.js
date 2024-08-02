
const conectar = async ()=>{
    if(global.conexao && global.conexao.static !='disconected'){
        return global.conexao
    }
    const MySQL=require('mysql2/promise')
    const con=MySQL.createConnection("mysql://root:LUAN123456789@localhost:3306/cfbcursos")
    console.log("Conectou ao banco")
    global.conexao=con
    return con
}

// BUSCANDO A TABELA NO MYSQL

const todosClientes = async()=>{
    const con=await conectar()
    const linhas = con.query('SELECT * FROM cliente_node ')
    return await linhas
}

//Aprendendo a fazer inserts

const inseriClientes = async(cliente)=>{
    const con=await conectar()
    const sql='INSERT INTO cliente_node (nome,idade) VALUES (?,?)'
    const valores=[cliente.nome,cliente.idade]
    await con.query(sql,valores)
}

//Atualizando os clientes

const atualizaClientes = async(id,cliente)=>{
    const con=await conectar()
    const sql=' UPDATE cliente_node SET nome=?,idade=? WHERE ID =?'
    const valores=[cliente.nome,cliente.idade,id]
    await con.query(sql,valores)    
}

//Deletando clientes

const deletarClientes = async(id,cliente)=>{
    const con=await conectar()
    const sql=' DELETE FROM cliente_node WHERE ID =?;'
    const valores=[id]
    await con.query(sql,valores)

    
}

module.exports = {todosClientes,inseriClientes,atualizaClientes,deletarClientes}