const db = require("./../configs/sequelize")
const { Model, DataTypes } = db.Sequelize

const sequelize = db.sequelize  


class User extends Model {}

User.init({
    Nome : {
        type : DataTypes.STRING,
        allowNull: false,
    },
    CPF  : {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
        
    },
    Datanascimento  : {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Telefone   : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Profissao   : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Escolaridade  : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Habilidades  : {
        type: DataTypes.STRING,
        allowNull: false
    },
   
}, {sequelize, modelName : "users"})

module.exports = User

