var express = require('express');
var router = express.Router();

const patient= require("../control/control_patient"); 
router.get('/',patient.getAll);
router.post('/',patient.postPatient);
router.get('/count',patient.numberOfPatientsPerDay);
module.exports = router;