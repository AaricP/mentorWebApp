// Import models
const Course = require('../models/course-model');
const Event = require('../models/event-model');
const Trainer = require('../models/trainer-model');
const Testimonial = require('../models/testimonial-model');

exports.getHome = async (req, res) => {
  // Get count of model rows
  const courseCount = await Course.count();
  const eventCount = await Event.count();
  const trainerCount = await Trainer.count();

  // Get top 3 liked courses
  const courses = await Course.findAll({
    limit: 3,
    order: [['likes', 'DESC']],
  });

  // Get trainers for courses
  const trainers = await Trainer.findAll();

  // 3 trainers for home page
  const homeTrainers = await Trainer.findAll({
    limit: 3,
  });

  res.render('index', {
    title: 'Home',
    img: 'about.jpg',
    courseCount,
    eventCount,
    trainerCount,
    courses,
    trainers,
    homeTrainers,
  });
};

exports.getAbout = async (req, res) => {
  // Get count of model rows
  const courseCount = await Course.count();
  const eventCount = await Event.count();
  const trainerCount = await Trainer.count();
  const testimonials = await Testimonial.findAll();
  res.render('About', {
    title: 'About',
    img: 'about-2.jpg',
    courseCount,
    eventCount,
    trainerCount,
    testimonials
  });
};
