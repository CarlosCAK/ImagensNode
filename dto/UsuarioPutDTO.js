const UsuarioModel = require("../model/UsuarioModel");


class UsuarioPutDTO{

    constructor(id,nome){
        this.id = id;
        this.nome = nome;
    }

    toEntity() {
        return new UsuarioModel(this.id,this.nome,null);
    }
}

module.exports = UsuarioPutDTO;