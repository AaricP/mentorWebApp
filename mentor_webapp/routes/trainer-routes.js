const express = require('express');

const router = express.Router();

// Import controllers
const trainerController = require('../controllers/trainer-controller')

router.get('/', trainerController.getTrainers);

module.exports = router;