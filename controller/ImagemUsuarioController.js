const ImagemUsuarioService = require("../service/ImagemUsuarioService")
const ImagemUsuarioPostDTO = require("../dto/ImagemUsuarioPostDTO")

class ImagemUsuarioController{

    constructor(){
        this.service = new ImagemUsuarioService()
    }

    async buscarPorId(req,res){
        try {
        
            const idUsuario = req.params.idUsuario;
    
            const image = await this.service.buscarPorUsuarioId(idUsuario)
    
            res.status(200).json({image})
    
        } catch (error) {
            res.status(500).json({error})
        }
        
    }

    async salvar(req,res){

        try {
       

            const idUsuario = req.body.idUsuario
            const referenciaImagem = req.body.referenciaImagem
    
            const imagemUsuario = new ImagemUsuarioPostDTO(referenciaImagem,idUsuario) 

            this.service.salvar(imagemUsuario)
    
            res.status(200).json({"message" : "Sucesso"})
        } catch (error) {
            res.status(500).json({error})
        }

    }

    async remover(req,res){
        try {
            const id = +req.params.id

            this.service.remover(id)

            res.status(200).json({
                "Message" : "Deletado"
            })

        } catch (error) {
            res.status(500).json({
                "message":"error"
            })
        }
    }

}

module.exports = ImagemUsuarioController;

