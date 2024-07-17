
const conectar = async ()=>{
    if(global.conexao && global.conexao.static !='disconected'){
        return global.conexao
    }
    const MySQL=require('mysql2/promise')
    const con=MySQL.createConnection("mysql://root:LUAN123456789@localhost:3306/NODE.JS")
    console.log("Conectou ao banco")
    global.conexao=con
    return con
}

conectar()
module.exports = {}