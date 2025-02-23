const ImagemModel = require("../model/ImagemModel")

class ImagemPutDTO {
    constructor(id, referencia, titulo) {
        this.id = id;
        this.referencia = referencia;
        this.titulo = titulo;
    }

    toEntity() {
        return new ImagemModel(this.id, this.referencia, null, this.titulo);
    }
}

module.exports = ImagemPutDTO;
