const UserRepository = require("../repository/UsuarioRepository")
const UserModel = require("../model/UsuarioModel")

class UserService{

    constructor(){
        this.repository = new UserRepository();
    }

    async salvar(user){
        this.repository.salvar(user)
    }

    async atualizar(usuario){
        this.repository.atualizar(usuario)
    }
    async buscarPorId(id){
       const usuario = await this.repository.buscarPorId(id)
        return usuario;
    }
    async remover(id){
        this.repository.remover(id)
    }

}

module.exports = UserService