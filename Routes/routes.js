const ImageRoutes = require("./ImagemRoutes")
const userRoutes = require("./UsuarioRoutes")
const express = require('express');


const router = express.Router();

router.use("/images",ImageRoutes)
router.use("/usuarios", userRoutes)

module.exports = router;
