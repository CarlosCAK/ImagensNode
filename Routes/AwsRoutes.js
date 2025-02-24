const express = require("express")
const router = express.Router()
const AwsController = require("../Controller/AwsController")

const controller = new AwsController()


router.get("/:referencia",(req,res) => controller.baixarArquivoPorReferencia(req,res))

module.exports = router;