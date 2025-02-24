const ImagemModel = require("../model/ImagemModel")

class ImagemGetDTO {
    constructor(id, referencia, dataCriacao, titulo) {
        this.id = id;
        this.referencia = referencia;
        this.dataCriacao = dataCriacao;
        this.titulo = titulo;
    }

    toEntity() {
        return new ImagemModel(this.id, this.referencia, this.dataCriacao, this.titulo);
    }
}

module.exports = ImagemGetDTO;
