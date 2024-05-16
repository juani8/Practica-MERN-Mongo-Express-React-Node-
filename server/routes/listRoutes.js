const { Router } = require("express");
const { createList, 
      deleteList,
      updateList,
      addToList,
      getList,
      getAllLists } = require("../controller/auth_controller");
const { verifyToken } = require("../middleware/verifyToken");


const router = Router();

router.post('/create', verifyToken, (req, res) => createList(req, res))

router.delete('/delete/:id', verifyToken, (req, res) => deleteList(req, res))

router.put('/update/:id', verifyToken, (req, res) => updateList(req, res))

router.post('/additem/:id', verifyToken, (req, res) => addToList(req, res))

router.get('/getone/:id', verifyToken, (req, res) => getList(req, res))

router.get('/getall', verifyToken, (req, res) => getAllLists(req, res))


module.exports = router;