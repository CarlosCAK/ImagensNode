const mySql= require("mysql2")

const connection = mySql.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "",
    database : "nodeApi"
})

connection.connect((erro) => {
    if(erro) {
        console.log("Erro ao conectar ao banco de dados" + erro.message);
        return;
    }
    console.log("Conectou ao banco");

})

module.exports = connection;