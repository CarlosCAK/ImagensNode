const ImageRoutes = require("./ImagemRoutes")
const userRoutes = require("./UsuarioRoutes")
const imagemUsuarioRoutes = require("../routes/ImagemUsuarioRoutes")
const awsRoutes = require("./AwsRoutes")
const express = require('express');


const router = express.Router();

router.use("/imagens",ImageRoutes)
router.use("/usuarios", userRoutes)
router.use("/imagem-usuario",imagemUsuarioRoutes)
router.use("/aws",awsRoutes)

module.exports = router;
