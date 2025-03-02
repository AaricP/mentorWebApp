const Sequelize = require('sequelize');

// Create sequelize instance
const sequelize = new Sequelize(
  'database',
  'username',
  'password',
  { dialect: 'mysql', host: 'host' }
);

module.exports = sequelize;