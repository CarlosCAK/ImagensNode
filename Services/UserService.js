const UserRepository = require("../Repositorys/UserRepository")
const UserModel = require("../Models/UserModel")

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