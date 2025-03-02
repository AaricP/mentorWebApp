const express = require('express');

const router = express.Router();

// Import controllers
const contactController = require('../controllers/contact-controller');

router.get('/new', contactController.getContact);

router.post('/create', contactController.postContact);

module.exports = router;
