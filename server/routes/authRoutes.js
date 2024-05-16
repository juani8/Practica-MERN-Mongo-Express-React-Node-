const { Router } = require("express");
const { createUser,
    validateLogin,
    passwordChange,
    usernameChange,
    getProfile,
    deleteToken } = require("../controller/auth_controller");
const { verifyToken } = require("../middleware/verifyToken");

    
const router = Router();


router.post('/register', (req,res) => createUser(req,res));


router.post('/login', (req,res) => validateLogin(req,res));


router.get('/profile', verifyToken, (req,res) => getProfile(req,res));


router.get('/logout', verifyToken, (req,res) => deleteToken(req,res));


router.put('/passmod', verifyToken, (req,res) => passwordChange(req,res));


router.put('/usermod', verifyToken, (req,res) => usernameChange(req,res));


module.exports = router;