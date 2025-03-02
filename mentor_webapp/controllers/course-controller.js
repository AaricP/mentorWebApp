const Course = require('../models/course-model');
const Trainer = require('../models/trainer-model');

exports.getCourses = async (req, res) => {
  const courses = await Course.findAll();
  const trainers = await Trainer.findAll();
  res.render('courses', { title: 'Courses', courses, trainers });
};

exports.getCourseDetails = async (req, res) => {
  const { courseSlug } = req.params;
  try {
    const course = await Course.findOne({
      where: {
        titleSlug: courseSlug,
      },
    });
    const trainer = await Trainer.findOne({
      where: {
        id: course.trainer,
      },
    });
    res.render('course-details', { title: 'Course Details', course, trainer });
  } catch (err) {
    console.log(err);
  }
};
