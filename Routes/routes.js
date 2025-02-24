const ImageRoutes = require("./ImagemRoutes")
const userRoutes = require("./UsuarioRoutes")
const imagemUsuarioRoutes = require("../routes/ImagemUsuarioRoutes")
const express = require('express');


const router = express.Router();

router.use("/imagens",ImageRoutes)
router.use("/usuarios", userRoutes)
router.use("/imagem-usuario",imagemUsuarioRoutes)

module.exports = router;
