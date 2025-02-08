const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rickAndMortyData', 'root', 'Mokojima2620+', {
    host: '127.0.0.1',
    dialect: 'mysql',
});

module.exports = sequelize;
