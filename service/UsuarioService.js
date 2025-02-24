const UserRepository = require("../repository/UsuarioRepository")
const UsuarioGetDTO = require("../dto/UsuarioGetDTO")

class UserService{

    constructor(){
        this.repository = new UserRepository();
    }

    async salvar(usuarioPostDto){
        const usuario = usuarioPostDto.toEntity();
        const dataHoje = new Date();
        const dataTemplate = dataHoje.toISOString().slice(0, 10)

        usuario.dataCriacao = dataTemplate;
        console.log(usuario.dataCriacao)

        this.repository.salvar(usuario)
    }

    async atualizar(usuarioPutDto){
        const usuario = usuarioPutDto.toEntity()
        
        this.repository.atualizar(usuario)
    }
    async buscarPorId(id){
       const result = await this.repository.buscarPorId(id)

       const resultID = result[0].id
       const nome = result[0].nome
       const data = result[0].data_criacao
       const usuario =  new UsuarioGetDTO(resultID, nome, data)

       return usuario;
    }
    async remover(id){
        this.repository.remover(id)
    }
    async buscarTodos() {
        const resultado = await this.repository.buscarTodos();

        if (resultado.length > 0) {
            const usuariosDTO = resultado.map((item) => {
                const idResposta = item.id;
                const nome = item.nome;
                const data_criacao = item.data_criacao;


                return new UsuarioGetDTO(idResposta,nome,data_criacao);
            });
            return usuariosDTO;
        } else {
            throw new Error("Nenhuma imagem encontrada para este usuário");
        }
    }

}

module.exports = UserService