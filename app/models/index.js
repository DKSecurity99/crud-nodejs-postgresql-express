const Sequelize = require('sequelize');
const configDB = require('../config/db.config.js');

const sequelize = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
    host: configDB.HOST,
    dialect: configDB.dialect,
    operatorsAliases: false,

    pool: {...configDB.pool},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);

module.exports = db;

