const ImageModel = require("../model/ImagemModel")

class ImageRepository{

    constructor(){
        this.database = require("../configuration/conn")
    }

    async salvar(image){
        this.database.query("INSERT INTO image (id,referencia,data_criacao,titulo) values (?,?,?,?)", [image.id, image.referencia, image.dataCriacao, image.titulo])
        console.log(image)
    }

    async buscarPorId(id){
        const result = await new Promise((resolve, rejected) => {
            this.database.query("SELECT * FROM image WHERE id = ?", [id], (erro, result) => {
                if (erro) {
                    return rejected(erro);
                }
                resolve(result)
            })
        })
        if (result.length > 0) {
            
                const id =  result[0].id
                const referencia =  result[0].referencia
                const data_criacao =  result[0].data_criacao
                const titulo =  result[0].titulo

                const image = new ImageModel(id,referencia,data_criacao,titulo)
            
                return image
        }
        else {
            throw new Error("Erro na busca")
        }
    }
     atualizar(image){
      
         this.database.query("UPDATE image SET referencia = ?, titulo = ? WHERE id = ?", [image.referencia, image.titulo, image.id])
    }
    async remover(id){
        this.database.query("DELETE FROM image where id = ?", [id])
    }

}

module.exports = ImageRepository;