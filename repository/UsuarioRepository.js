const UserModel = require("../model/UsuarioModel")

class UserRepository {

    constructor() {
        this.database = require("../configuration/conn");
    }

    async salvar(usuario) {

        this.database.query("INSERT INTO USUARIO (nome,data_criacao) values (?,?)",
            [usuario.nome, usuario.dataCriacao], (erro, resposta) => {
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


            
            return result;

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
    async buscarTodos() {
        const result = await new Promise((resolve, rejected) => {
            this.database.query("SELECT * FROM usuario", [], (erro, result) => {
                if (erro) {
                    return rejected(erro);
                }
                resolve(result);
            });
        });

        if (result.length > 0) {
            return result;
        } else {
            throw new Error("Nenhuma imagem encontrada para o usuário");
        }
    }
}

module.exports = UserRepository;