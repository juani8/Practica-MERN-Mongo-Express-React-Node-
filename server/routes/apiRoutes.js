const { Router } = require("express");
const { getImages } = require("../controller/api_controller");
const { verifyToken } = require("../middleware/verifyToken");

    
const router = Router();

router.get('/photo', (req,res) => getImages(req,res));

module.exports = router;