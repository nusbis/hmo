var express = require('express');
var router = express.Router();

const hmo_member= require("../control/control_hmo_member"); 
const { Router } = require('express');

router.get('/',hmo_member.getAll);
router.get('/:id', hmo_member.getByID);
router.post('/', hmo_member.postMember);
router.get('/unvaccinated/amount',hmo_member.amountOfUnvaccinatedPOSMembers)
module.exports = router;