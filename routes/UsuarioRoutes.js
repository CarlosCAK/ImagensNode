const express = require("express")
const router = express.Router()
const UsuarioController = require("../controller/UsuarioController")

const controller = new UsuarioController()


router.get("/:id",  (req,res) => controller.buscarPorId(req,res))
router.post("/", (req,res) => controller.salvar(req,res))
router.delete("/:id", (req,res) =>controller.remover(req,res))
router.put("/",  (req,res) =>controller.atualizar(req,res))
router.get("/",(req,res) => controller.buscarTodos(req,res))


module.exports = router;