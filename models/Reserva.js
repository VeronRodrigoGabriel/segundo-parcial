// TODO: Crear modelo de datos de Reserva
const {sequelize,DataType} = require("../database");


const Reserva = sequelize.define('reserva', {
    Nombre: {
        type: DataType.STRING,
        allownull: false
    },
    Apellido: {
        type: DataType.STRING,
        allownull: false
    },
    Codigo_Reserva:{
        type: DataType.INTERGER,
        allownull: false
    },
    Fecha_Reserva: {
        type: DataType.INTERGER,
        allownull: false
    }
},{
    tableName: 'Reserva'
});

Reserva.sync();

module.exports = Reserva;