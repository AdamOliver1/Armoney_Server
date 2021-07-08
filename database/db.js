const Sequelize = require('sequelize');
module.exports = new Sequelize('armoney_db', 'postgres', '1234', {

    host: 'localhost',
    dialect: 'postgres',
    port:5432,
    //may change it
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    ssl: true
},
);