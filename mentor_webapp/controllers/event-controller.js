const Event = require('../models/event-model');

const sequelize = require('../util/database');

exports.getEvents = async (req, res) => {
  const events = await Event.findAll({
    order: sequelize.col('date'),
  });
  res.render('events', { title: 'Events', events });
};
