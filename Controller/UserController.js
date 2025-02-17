const app = require("../Controller/app")
const UserService = require("../Services/UserService")
const UserModel = require("../Models/UserModel")


class UserController{

    constructor(){
        this.service = new UserService()
    }

    async buscarPorId(req,res) {
    
        try{
            const id = +req.params.id;
            const user = await this.service.buscarPorId(id);
    
            res.status(200).json({user})
    
        }catch(error){
            res.status(404).json({
                "message" : "sssssssss"
            })
        }
    }
    
    async salvar(req, res){
    
        try {
            const dataHoje = new Date();
            const dataTemplate = dataHoje.toISOString().slice(0, 10)
    
            const id = +req.body.id;
            const nome = req.body.nome;
    
            const user = new UserModel(id,nome,dataTemplate)
            console.log(user)
            this.service.salvar(user)

            res.status(200).json({
                "message" : "Sucesso"
            })

           
        } catch (error) {
            res.status(500).json({
                "Message": error
            })
        }
    }

    async remover(req,res){

        try {
            const userId = +req.params.id;

            this.service.remover(userId)

            res.status(200).json({
                "message" : "Sucesso"
            })
            
        } catch (error) {
            res.status(404).json({
                "message" :  error
            })
        }
    }

    async atualizar(req,res){

        try {
            
            const usuario = new UserModel(+req.body.id,req.body.nome, null)
            this.service.atualizar(usuario)

            res.status(200).json({
                "message" : "Sucesso"
            })

        } catch (error) {
            res.status(404).json({
                "message" :  error
            })
        }
    }

}

module.exports = UserController