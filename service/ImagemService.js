const ImageRepository = require("../repository/ImagemRepository")
const ImagemGetDTO = require("../dto/ImagemGetDTO")
const AwsService = require("./AwsService")
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class ImageService{

    constructor(){
        this.repository = new ImageRepository();
        this.awsService = new AwsService()
    }

    async salvar(imagemPostDTO, arquivoImagem){

        const currentDate = new Date();

        const date = currentDate.toISOString().slice(0, 10)

        const imagem = imagemPostDTO.toEntity();


        imagem.dataCriacao = date;
        imagem.referencia = uuidv4()
        const extencao = path.extname(arquivoImagem)

        imagem.referencia = imagem.referencia + extencao;

        this.awsService.uploadFile(arquivoImagem,"bucket",imagem.referencia)

        this.repository.salvar(imagem)
    }

    async atualizar(imagemPutDto){
        const imagem = imagemPutDto.toEntity()
        this.repository.atualizar(imagem)
    }
    async buscarTodos() {
        const resultado = await this.repository.buscarTodos();

        if (resultado.length > 0) {
            const imagensDTO = resultado.map((item) => {
                const idResposta = item.id;
                const referencia = item.referencia;
                const data_criacao = item.data_criacao;
                const titulo = item.titulo

                return new ImagemGetDTO(idResposta,referencia,data_criacao,titulo);
            });
            return imagensDTO;
        } else {
            throw new Error("Nenhuma imagem encontrada para este usuário");
        }
    }
    async buscarPorId(id){
       const resultado = await this.repository.buscarPorId(id)

       const idResposta =  resultado[0].id
       const referencia =  resultado[0].referencia
       const data_criacao =  resultado[0].data_criacao
       const titulo =  resultado[0].titulo

       const image = new ImagemGetDTO(idResposta,referencia,data_criacao,titulo)
   
       return image
    }
    async remover(id){
        this.repository.remover(id)
    }

}

module.exports = ImageService;