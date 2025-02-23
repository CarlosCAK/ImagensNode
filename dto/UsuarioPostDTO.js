const UsuarioModel = require("../model/UsuarioModel");


class UsuarioPostDTO{

    constructor(nome){
        this.nome = nome;
    }

    toEntity() {
        return new UsuarioModel(null,this.nome,null);
    }
}

module.exports = UsuarioPostDTO;