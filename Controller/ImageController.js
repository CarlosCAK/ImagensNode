
const ImageModel = require("../model/ImagemModel")
const ImageService = require("../service/ImagemService")

class ImageController{

    constructor(){
        this.service = new ImageService()
    }

    async salvar(req,res){

        try {
            const currentDate = new Date();

            const date = currentDate.toISOString().slice(0, 10)
    
            const id= req.body.id
            const referencia= req.body.referencia
            const titulo = req.body.titulo

            const image = new ImageModel(id,referencia,date,titulo) 

            this.service.salvar(image)

            res.status(200).json({"message" : "Sucesso"})
        } catch (error) {
            res.status(500).json({error})
        }

    }
    async buscarPorId(req,res){

        try {
            
            const idImage = req.params.id;

            const image = await this.service.buscarPorId(idImage)

            res.status(200).json({image})

        } catch (error) {
            res.status(500).json({error})
        }
    }
    atualizar(req,res){

        try {
            const referencia = req.body.referencia
            const titulo = req.body.titulo
            const id = req.body.id
            
            const imagem = new ImageModel(id,referencia,null,titulo)
            console.log(imagem)
            this.service.atualizar(imagem)

            res.status(200).json({"message" : "sucesso"})


        } catch (error) {
            res.status(500).json({error})
        }
    }
    remover(req,res){
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
module.exports = ImageController