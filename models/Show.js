const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Show extends Model {}

Show.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deposit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      show_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arrival_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'show'
    }
  );

  module.exports = Show;