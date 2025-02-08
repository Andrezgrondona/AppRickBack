const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Character = sequelize.define('Character', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
    },
    species: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    origin: {
        type: DataTypes.STRING,
    },
    image: { 
        type: DataTypes.STRING,
    },
});

module.exports = Character;

//1. Crear una migración
//Para crear una migración, se debe usar el comando de Sequelize CLI.
//npx sequelize-cli migration:generate --name create-character
//Automaticamente Esto generará un archivo de migración en la carpeta migrations


//2.Definida la esrcutura de  migración,
//se debe  ejecutar para aplicar los cambios en la base de datos.
// se debe usar el siguiente comando:
//npx sequelize-cli db:migrate


