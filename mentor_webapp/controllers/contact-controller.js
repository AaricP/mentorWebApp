const Contact = require('../models/contact-model');

exports.getContact = (req, res) => {
  res.render('contact', { title: 'Contact' });
};

exports.postContact = (req, res) => {
  Contact.create({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  })
    .then((response) => {
      console.log('Success!', response);
      res.render('thanks', { title: 'Thanks' });
    })
    .catch((err) => {
      console.log('Error:', err);
      res.render('contact', {
        title: 'Contact',
        message: 'Oops! Something went wrong.',
      });
    });
};
