const ImagemUsuarioRepository = require("../repository/ImagemUsuarioRepository");
const ImagemUsuarioGetDTO = require("../dto/ImagemUsuarioGetDTO");
const ImagemUsuarioPostDTO = require("../dto/ImagemUsuarioPostDTO")

class ImagemUsuarioService {

    constructor() {
        this.repository = new ImagemUsuarioRepository();
    }

    // Método para salvar a associação entre usuário e imagem
    async salvar(imagemUsuarioPostDTO) {
        const usuarioImagem = imagemUsuarioPostDTO.toEntity();
        this.repository.salvar(usuarioImagem);
    }

    // Método para buscar as imagens associadas a um usuário
    async buscarPorUsuarioId(id_usuario) {
        const resultado = await this.repository.buscarPorUsuarioId(id_usuario);

        if (resultado.length > 0) {
            const imagensDTO = resultado.map((item) => {
                const id = item.id;
                const refImagem = item.ref_imagem;
                const idUsuario = item.id_usuario;

                return new ImagemUsuarioGetDTO(id, refImagem, idUsuario);
            });
            return imagensDTO;
        } else {
            throw new Error("Nenhuma imagem encontrada para este usuário");
        }
    }

    async remover(id) {
        this.repository.remover(id);
    }
}

module.exports = ImagemUsuarioService;
