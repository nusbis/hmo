var express = require('express');
var router = express.Router();

const city= require("../control/control_city"); 

router.post('/', city.postCity);
router.get('/',city.getAllCities);

module.exports = router;