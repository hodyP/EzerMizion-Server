const { Sequelize } = require('sequelize');
const {sequelize}=require('./sequelize')
const { applyExtraSetup } = require('./Extra-Setup');

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.city = require('./city')
db.needy_requests = require('./needy_requests')
db.partInDay = require('./partInDay')
db.type_of_volunteer = require('./type_of_volunteer');
db.volunteer_details = require('./volunteer_details');
db.volunteer = require('./volunteer');
db.volunteer_timer=require('./volunteer_timer');
db.needy=require('./needy');
db.manager=require('./manager');
applyExtraSetup();

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('yes re-sync done!')
  })
module.exports=db;