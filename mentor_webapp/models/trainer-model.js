// Import sequelize data types
const { DataTypes } = require('sequelize');

// Import my configured sequelize instance
const sequelize = require('../util/database');

// Create Trainer model

const Trainer = sequelize.define('trainer', {
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
    validate: {
      is: {
        args: /\.(jpg|png)$/i,
        msg: 'Only .jpg or .png image files are allowed.',
      },
    },
  },
  expertise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Trainer;
