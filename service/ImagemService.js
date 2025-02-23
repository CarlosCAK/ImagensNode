const ImageRepository = require("../repository/ImagemRepository")

class ImageService{

    constructor(){
        this.repository = new ImageRepository();
    }

    async salvar(image){
        this.repository.salvar(image)
    }
    async atualizar(image){
        this.repository.atualizar(image)
    }
    async buscarPorId(id){
       return await this.repository.buscarPorId(id)
    }
    async remover(id){
        this.repository.remover(id)
    }

}

module.exports = ImageService;