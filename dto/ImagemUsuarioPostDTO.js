const ImagemUsuarioModel = require("../model/ImagemUsuarioModel")

class ImagemUsuarioPostDTO{

    constructor(refImagem, idUsuario){
        this.refImagem = refImagem,
        this.idUsuario = idUsuario
    }

    toEntity(){
        return new ImagemUsuarioModel(null, this.refImagem, this.idUsuario)
    }

}

module.exports = ImagemUsuarioPostDTO;