const Kudos = require('../models/testimonial-model');

exports.getKudos = (req, res) => {
  res.render('kudos', { title: 'Kudos' });
};

exports.postKudos = (req, res) => {
  Kudos.create({
    name: req.body.name,
    image: req.body.image,
    occupation: req.body.occupation,
    rating: req.body.rating,
    quote: req.body.quote,
  })
    .then((response) => {
      console.log('Success!', response);
      res.redirect('/about#kudos');
    })
    .catch((err) => {
      console.log('Error:', err);
      res.render('kudos', {
        title: 'Kudos',
        message: 'Oops! Something went wrong.',
      });
    });
};