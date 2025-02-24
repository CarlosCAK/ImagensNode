
const ImageService = require("../service/ImagemService")
const ImagePostDTO = require("../dto/ImagemPostDTO")
const ImagemPutDTO = require("../dto/ImagemPutDTO")

class ImagemController{

    constructor(){
        this.service = new ImageService()
    }

    async salvar(req,res){

        try {
           
    
            const caminhoImagem = req.body.caminhoImagem
            const titulo = req.body.titulo

            const image = new ImagePostDTO(titulo) 

            this.service.salvar(image, caminhoImagem)

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
            
            const imagem = new ImagemPutDTO(id,referencia,null,titulo)
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
    async buscarTodos(req,res){

        try {
            

            const imagens = await this.service.buscarTodos()

            res.status(200).json({imagens})

        } catch (error) {
            res.status(500).json({error})
        }
    }

}
module.exports = ImagemController