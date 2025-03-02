// Import DataTypes object from sequelize package
const { DataTypes } = require('sequelize');

const slugify = require('slugify');

// Import configured sequelize instance
const sequelize = require('../util/database');

// Define a model for a Course

const Course = sequelize.define('course', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
    set(value) {
      this.setDataValue('title', value);
      this.setDataValue(
        'titleSlug',
        slugify(value, { lower: true, trim: true })
      );
    },
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
  summary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  registrants: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  trainer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  titleSlug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Course;
