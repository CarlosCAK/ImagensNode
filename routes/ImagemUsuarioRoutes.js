const express = require("express")
const router = express.Router()
const ImagemUsuarioController = require("../controller/ImagemUsuarioController")

const controller = new ImagemUsuarioController()


router.get("/:idUsuario",  (req,res) => controller.buscarPorId(req,res))
router.post("/", (req,res) => controller.salvar(req,res))
router.delete("/:id", (req,res) =>controller.remover(req,res))
router.get("/", (req,res) =>controller.buscarTodos(req,res))

module.exports = router;