const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

// Create log directory if it doens't already exist
const logDirectory = path.join(__dirname, 'log');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
// Create write stream
const logStream = fs.createWriteStream(
  path.join(logDirectory, 'logRequests.txt'),
  { flags: 'a' }
);
// Morgan middleware setup to log in dev format
const requestLogger = morgan('dev', { stream: logStream });

module.exports = requestLogger;
