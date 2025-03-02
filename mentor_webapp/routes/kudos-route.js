const express = require('express');

const router = express.Router();

// Import controllers
const kudosController = require('../controllers/kudos-controller');

router.get('/', kudosController.getKudos);

router.post('/', kudosController.postKudos);

module.exports = router;
