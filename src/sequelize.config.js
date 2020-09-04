const dbConfig = require('./keys');
const Sequelize= require('sequelize');

// Passing parameters
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: {
        timezone: 'Etc/GMT+1',
    },
    
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models table
db.customers = require('./model/customers.model')(sequelize, Sequelize);

module.exports = db;