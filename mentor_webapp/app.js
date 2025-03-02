const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// Import morgan logger
const requestLogger = require('./middleware');

// Import Routers
const homeRouter = require('./routes/home-routes');
const trainerRouter = require('./routes/trainer-routes');
const eventRouter = require('./routes/event-routes');
const courseRouter = require('./routes/course-routes');
const contactRouter = require('./routes/contact-routes');
const kudosRouter = require('./routes/kudos-route');

// Initialize express app
const app = express();

// Initialize app settings
app.set('view engine', 'ejs');
app.set('views', 'views');

// Mount Middleware

// Tell app where to locate static resources
app.use(express.static(path.join(__dirname, 'public')));

// Mount morgan logger middleware
app.use(requestLogger);

//Mount middleware to parse request bodies (for POST requests)
app.use(express.urlencoded({ extended: false }));

// Tell app to use expressLayouts
app.use(expressLayouts);

// Register routes
app.use('/', homeRouter);

app.use('/contact', contactRouter);

app.use('/kudos', kudosRouter);

app.use('/courses', courseRouter);

app.use('/events', eventRouter);

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

app.use('/trainers', trainerRouter);

// Launch app
app.listen(3000);
