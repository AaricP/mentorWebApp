// Import sequelize instance
const sequelize = require('./database');

// Import sequelize models
const Trainer = require('../models/trainer-model');
const Event = require('../models/event-model');
const Course = require('../models/course-model');
const Contact = require('../models/contact-model');
const Testimonial = require('../models/testimonial-model');

// Import JSON data
const trainerData = require('./trainers.json');
const eventData = require('./events.json');
const courseData = require('./courses.json');
const testimonialData = require('./testimonials.json');

// Sync my sequelize instance with the database
sequelize
  .sync()
  .then((result) => {
    console.log('Success!', result);
  })
  .then(() => {
    return Trainer.bulkCreate(trainerData);
  })
  .then((trainerData) => {
    console.log('Trainer Success!', trainerData);
  })
  .then(() => {
    return Event.bulkCreate(eventData);
  })
  .then((eventData) => {
    console.log('Event Success!', eventData);
  })
  .then(() => {
    return Course.bulkCreate(courseData);
  })
  .then((courseData) => {
    console.log('Course Success!', courseData);
  })
  .then(() => {
    return Contact.build();
  })
  .then(() => {
    return Testimonial.bulkCreate(testimonialData);
  })
  .then((testimonialData) => {
    console.log('Testimonial Success!', testimonialData);
  })
  .catch((err) => {
    console.log(err);
  });
