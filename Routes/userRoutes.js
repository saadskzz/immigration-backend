const express = require('express')
const upload = require('../multer')
const { consultantinfo, getConsultants } = require("../UserController/userController");

const router = express.Router();
router.route('/consultantinfo').post(upload.single('avatar'),consultantinfo)
router.route('/consultantinfo').get(getConsultants)
module.exports = router;