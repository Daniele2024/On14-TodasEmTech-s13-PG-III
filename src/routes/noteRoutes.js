const express = require("express")
const router = express.Router()

const controller = require("../controller/noteController")

router.get("/all", controller.getAll)

module.exports = router