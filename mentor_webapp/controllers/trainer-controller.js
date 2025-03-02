const Trainer = require('../models/trainer-model');

exports.getTrainers = async (req, res) => {
  const trainers = await Trainer.findAll();
  res.render('trainers', { title: 'Trainers', trainers});
};
