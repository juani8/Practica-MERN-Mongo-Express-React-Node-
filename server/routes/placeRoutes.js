const { Router } = require("express");
const { createPlace } = require("../controller/place_controller");
const { verifyToken } = require("../middleware/verifyToken");


const router = Router();

router.post('/', verifyToken, (req,res) => createPlace(req,res));

module.exports = router;