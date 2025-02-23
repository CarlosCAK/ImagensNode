const express = require("express")
const router = express.Router()
const ImageController = require("../Controller/ImageController")

const controller = new ImageController()


router.get("/:id",(req,res) => controller.buscarPorId(req,res))
router.post("/", (req,res) => controller.salvar(req,res))
router.delete("/:id", (req,res) => controller.remover(req,res))
router.put("/", (req,res) => controller.atualizar(req,res))

module.exports = router;
