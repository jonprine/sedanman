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
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      venue: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contact: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deal: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deposit: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      showtime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivaltime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
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