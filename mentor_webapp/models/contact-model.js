// Import Sequelize data types
const { DataTypes } = require('sequelize');

// Import my configured sequelize instance
const sequelize = require('../util/database');

// Create a new model for a contact request using sequelize.define

const Contact = sequelize.define('contact', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: 'Please enter a valid email address.',
      },
    },
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  post_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  response: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  response_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Contact;
