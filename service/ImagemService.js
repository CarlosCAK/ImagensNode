const ImageRepository = require("../repository/ImagemRepository")
const ImagemGetDTO = require("../dto/ImagemGetDTO")

class ImageService{

    constructor(){
        this.repository = new ImageRepository();
    }

    async salvar(imagemPostDTO){

        const currentDate = new Date();

        const date = currentDate.toISOString().slice(0, 10)

        const imagem = imagemPostDTO.toEntity();

        imagem.dataCriacao = date;

        this.repository.salvar(imagem)
    }
    async atualizar(imagemPutDto){
        const imagem = imagemPutDto.toEntity()
        this.repository.atualizar(imagem)
    }
    async buscarPorId(id){
       const resultado = await this.repository.buscarPorId(id)

       const idResposta =  resultado[0].id
       const referencia =  resultado[0].referencia
       const data_criacao =  resultado[0].data_criacao
       const titulo =  resultado[0].titulo

       const image = new ImagemGetDTO(idResposta,referencia,data_criacao,titulo)
   
       return image
    }
    async remover(id){
        this.repository.remover(id)
    }

}

module.exports = ImageService;