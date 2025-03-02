// Import sequelize data types
const { DataTypes } = require('sequelize');

// Import my configured sequelize instance
const sequelize = require('../util/database');

// Create Event model

const Event = sequelize.define('event', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  summary: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /\.(jpg|png)$/i,
        msg: 'Only .jpg or .png image files are allowed.',
      },
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Event;