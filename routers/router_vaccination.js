var express = require('express');
var router = express.Router();

const vaccination= require("../control/control_vaccination"); 

router.get('/types/all',vaccination.getAll);
router.get('/manufacturer',vaccination.gellAllManufacturer);
router.get('/',vaccination.getAllVaccination_for_patient);
router.post('/',vaccination.postVaccateMember);

module.exports = router;