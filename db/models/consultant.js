'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');

const sequelize =require('../../config/database')
module.exports = sequelize.define('Consultants', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  practicename: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  visaObtained: {
    type: Sequelize.STRING
  },
  image: {  
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})
 