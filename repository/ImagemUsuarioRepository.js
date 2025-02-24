
class UsuarioImagemRepository {

    constructor(){
        this.database = require("../configuration/conn");
    }

    async salvar(usuarioImagem) {
        this.database.query("INSERT INTO usuario_imagem (ref_imagem, id_usuario) values (?, ?)", [usuarioImagem.referencia, usuarioImagem.idUsuario], (erro, result) => {
            if (erro) {
                console.error(erro);
                throw new Error("Erro ao salvar a associação");
            }
        });
    }

    async buscarPorUsuarioId(id_usuario) {
        const result = await new Promise((resolve, rejected) => {
            this.database.query("SELECT * FROM usuario_imagem WHERE id_usuario = ?", [id_usuario], (erro, result) => {
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
    async buscarTodos() {
        const result = await new Promise((resolve, rejected) => {
            this.database.query("SELECT * FROM usuario_imagem", [], (erro, result) => {
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

    async remover(id) {
        this.database.query("DELETE FROM usuario_imagem WHERE id = ?", [id], (erro, result) => {
            if (erro) {
                console.error(erro);
                throw new Error("Erro ao remover a associação");
            }
            console.log("Associação removida com sucesso!");
        });
    }
}

module.exports = UsuarioImagemRepository;
