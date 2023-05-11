var express = require('express');
var router = express.Router();

const login= require("../control/control_login"); 
router.post('/',login.login);

module.exports = router;