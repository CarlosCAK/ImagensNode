const UsuarioModel = require("../model/UsuarioModel");

class UsuarioGetDTO{

    constructor(id,nome,data_criacao){
        this.id = id;
        this.nome = nome;
        this.data_criacao = data_criacao;
    }
    
    toEntity(){
        return new UsuarioModel(this.id,this.nome,this.data_criacao)
    }
}

module.exports = UsuarioGetDTO;