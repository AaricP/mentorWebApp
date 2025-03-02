// Import sequelize DataTypes
const { DataTypes } = require('sequelize');

// Import sequelize database
const sequelize = require('../util/database');

// Create Testimonial model
const Testimonial = sequelize.define('testimonial', {
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
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quote: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
});

module.exports = Testimonial;
