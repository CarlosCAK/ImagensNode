const UserModel = require("../model/UsuarioModel")

class UserRepository {

    constructor() {
        this.database = require("../configuration/conn");
    }

    async salvar(usuario) {

        this.database.query("INSERT INTO USUARIO (nome,data_criacao) values (?,?)",
            [usuario.nome, usuario.data_criacao], (erro, resposta) => {
                if (erro) {
                    throw new Error(erro)
                }
            })
    }
    async buscarPorId(id) {

        const result = await new Promise((resolve, reject) => {
            
            this.database.query(`SELECT * FROM USUARIO WHERE id = ?`, [id], (erro, resultado) => {
                if (erro) {
                    return reject(erro); // lança uma exceção 
                }
                resolve(resultado); // da um return 

            });
        });
        if (result.length > 0) {


            const resultID = result[0].id
            const nome = result[0].nome
            const data = result[0].data_criacao
            const user =  new UserModel(resultID, nome, data)
            return user;

        }else{
            throw new Error("Deu erro")
        }
    }

    async atualizar(usuario) {
        this.database.query("UPDATE USUARIO SET nome = ? WHERE id = ?", [usuario.nome,usuario.id])
    }

    async remover(id){
        this.database.query("DELETE FROM USUARIO WHERE id = ?", [id])
    }
}

module.exports = UserRepository;