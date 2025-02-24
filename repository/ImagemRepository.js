const ImageModel = require("../model/ImagemModel")

class ImagemRepository{

    constructor(){
        this.database = require("../configuration/conn")
    }

    async salvar(image){
        this.database.query("INSERT INTO imagem (referencia,data_criacao,titulo) values (?,?,?)", [image.referencia, image.dataCriacao, image.titulo])
        console.log(image)
    }

    async buscarPorId(id){
        const result = await new Promise((resolve, rejected) => {
            this.database.query("SELECT * FROM imagem WHERE id = ?", [id], (erro, result) => {
                if (erro) {
                    return rejected(erro);
                }
                resolve(result)
            })
        })
        if (result.length > 0) {
            
            return result;
               
        }
        else {
            throw new Error("Erro na busca")
        }
    }
    async buscarTodos() {
        const result = await new Promise((resolve, rejected) => {
            this.database.query("SELECT * FROM imagem", [], (erro, result) => {
                if (erro) {
                    return rejected(erro);
                }
                resolve(result);
            });
        });

        if (result.length > 0) {
            return result;
        } else {
            throw new Error("Nenhuma imagem encontrada para o usuário");
        }
    }
     atualizar(image){
      
         this.database.query("UPDATE imagem SET referencia = ?, titulo = ? WHERE id = ?", [image.referencia, image.titulo, image.id])
    }
    async remover(id){
        this.database.query("DELETE FROM imagem where id = ?", [id])
    }

}

module.exports = ImagemRepository;