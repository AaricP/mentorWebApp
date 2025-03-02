const express = require('express');

const router = express.Router();

//Import controller
const courseController = require('../controllers/course-controller');

router.get('/:courseSlug', courseController.getCourseDetails);

router.get('/', courseController.getCourses);

module.exports = router;
