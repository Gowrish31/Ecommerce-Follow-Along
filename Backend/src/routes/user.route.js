const express = require('express');
// const upload = require('../middlewares/multer.js');
const multer = require('multer');
const {
  CreateUSer,
  verifyUserController,
  signup,
  login,
  getUSerData,
  AddressController,
  getAddressController,
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const verifyUser = require('../middlewares/jwt-verify.js');
const upload = multer({ dest: 'temp-uploads/' });
const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUSer);
router.get('/activation/:token', verifyUserController);


router.post('/signup', upload.single('file'), signup);
router.post('/login', login);
router.get('/user-data', verifyUser, getUSerData);
router.post("/add-address",verifyUser,AddressController)
router.get('/get-addresses',verifyUser,getAddressController)

module.exports = router;