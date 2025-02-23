const ImagemModel = require("../model/ImagemModel")

class ImagemPostDTO{

    constructor(referenecia,titulo){
        this.referencia = referenecia,
        this.titulo = titulo
    }

    toEntity(){

        return new ImagemModel(null,this.referencia,null,this.titulo)
    }

}

module.exports = ImagemPostDTO;