const ImageRoutes = require("./ImageRoutes")
const userRoutes = require("./UserRoutes")
const express = require('express');


const router = express.Router();

router.use("/images",ImageRoutes)
router.use("/usuarios", userRoutes)

module.exports = router;
