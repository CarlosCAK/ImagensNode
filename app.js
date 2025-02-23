const express = require("express")
// const userRepository = require("../Repository/userRepository")
const routes = require("./Routes/routes")
// const repository = new userRepository();

const app = express();

const PORT = 3000;
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})
app.use("/",routes)


module.exports = app;

// app.get("/usuarios/:id", async (req, res) => {
//     try {
//         const userId = req.params.id;

//         // Usando `new Promise` para converter a função callback em algo compatível com async/await
//         const result = await new Promise((resolve, reject) => {
//             database.query(`SELECT * FROM USUARIO WHERE id = ?`, [userId], (erro, resultado) => {
//                 if (erro) {
//                     return reject(erro); // lança uma exceção 
//                 }
//                 resolve(resultado); // da um return 
//             });
//         });
//         if (result.length > 0) {

//             const obj = {
//                 id: result[0].id,
//                 nome: result[0].nome,
//                 data: result[0].data_criacao
//                 // Ajustado para acessar a primeira linha do resultado
//             };
//             res.status(200).json(obj);
//         } else {
//             res.status(404).json({ message: "Usuário não encontrado" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Erro no servidor" });
//     }
// });

// app.post("/usuarios", async (req, res) => {

//     try {
//         const dataHoje = new Date();
//         const dataTemplate = dataHoje.toISOString().slice(0, 10)
//         database.query("INSERT INTO USUARIO (id,nome,data_criacao) values (?,?,?)",
//             [req.body.id, req.body.nome, dataTemplate], (erro, resposta) => {
//                 if(erro){
//                     return res.status(500).json({
//                         "Message": erro
//                     })                
//                 }
//                 else{
//                     res.status(200).json({
//                         "message": "Sucesso",
//                         "Corpo": req.body
//                     })
//                 }
//             })
//     } catch (error) {
//         res.status(500).json({
//             "Message": error
//         })
//     }
// })
// app.put("/usuarios", async (req, res) => {
//     try {
//         database.query("UPDATE USUARIO SET nome = ? WHERE id = ?", [req.body.nome, req.body.id])
//         res.status(200).json({
//             "message": "Alterado"
//         })
//     } catch (error) {
//         res.status(500).json({
//             "Message": error
//         })  
//     }
// })
// app.delete("/usuario/:id", async (req, res) => {
//     try {
//             const userId = +req.params.id;
//         database.query("DELETE FROM USUARIO WHERE id = ?", [userId])
//         res.status(200).json({
//             "message": "Excluido"
//         })
//     } catch (error) {
//         res.status(500).json({
//             "Message": error
//         })
//     }
// })

// app.get("/images/:id", async (req, res) => {

//     try {
//         const idImage = req.params.id;

//         const result = await new Promise((resolve, rejected) => {
//             database.query("SELECT * FROM image WHERE id = ?", [idImage], (erro, result) => {
//                 if (erro) {
//                     return rejected(erro);
//                 }
//                 resolve(result)
//             })
//         })
//         if (result.length > 0) {
//             const image = {
//                 id: result[0].id,
//                 referencia: result[0].referencia,
//                 data_criacao: result[0].data_criacao,
//                 titulo: result[0].titulo
//             };
//             res.status(200).json(image)
//         }
//         else {
//             res.status(404).json({
//                 "mensagem": "Não encontrado"
//             })
//         }

//     } catch (error) {
//         res.status(500).json({
//             "message": "error"
//         })
//     }
// })
// app.post("/images", async (req, res) => {
//     try {

//         const currentDate = new Date();

//         const date = currentDate.toISOString().slice(0, 10)

//         const image = {
//             id: req.body.id,
//             referencia: req.body.referencia,
//             data_criacao: date,
//             titulo: req.body.titulo
//         }
//         database.query("INSERT INTO image (id,referencia,data_criacao,titulo) values (?,?,?,?)", [image.id, image.referencia, image.data_criacao, image.titulo])

//         res.status(200).json({
//             "message": "sucesso"
//         })

//     } catch (error) {
//         res.status(500).json({
//             "message": error
//         })
//     }
// })
// app.put("/images", async (req, res) => {


//     try {
//         database.query("UPDATE image SET referencia = ?, titulo = ? WHERE id = ?", [req.body.referencia, req.body.titulo, req.body.id])
//          res.status(200).json({
//             "Message" : "Deu certo"
//          })

//     } catch (error) {
//         res.status(500).json({
//             "message": error
//         })
//     }
// })
// app.delete("/images/:id", async (req,res) => {

//     try {
//         const id = req.params.id
//         database.query("DELETE FROM image where id = ?", [id])
//         res.status(200).json({
//             "Message" : "Deletado"
//         })
//     } 
//     catch (error) {
//         res.status(500).json({
//             "message":"error"
//         })
//     }

// })