const express = require('express');

const router = express.Router();

//Import controller
const eventController = require('../controllers/event-controller');

router.get('/', eventController.getEvents);

module.exports = router;
