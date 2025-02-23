const UsuarioPostDTO = require("../dto/UsuarioPostDTO")
const UsuarioPutDTO = require("../dto/UsuarioPutDTO")
const UsuarioService = require("../service/UsuarioService")


class UsuarioController{

    constructor(){
        this.service = new UsuarioService()
    }

    async buscarPorId(req,res) {
    
        try{
            const id = +req.params.id;
            const user = await this.service.buscarPorId(id);
    
            res.status(200).json({user})
    
        }catch(error){
            res.status(404).json({
                "message" : error
            })
        }
    }
    
    async salvar(req, res){
    
        try {
      
            const nome = req.body.nome;
            const user = new UsuarioPostDTO(nome)
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
            
            const usuario = new UsuarioPutDTO(+req.body.id,req.body.nome)
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

module.exports = UsuarioController