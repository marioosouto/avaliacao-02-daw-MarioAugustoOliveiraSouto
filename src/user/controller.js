const { sequelize } = require("./../configs/sequelize")
const db = require("./../configs/sequelize")
const User = require("./model")
const { Op } = require("sequelize");


exports.create = (req, res) => {

    User.create({
        Nome: req.body.Nome,
        CPF: req.body.CPF,
        Datanascimento: req.body.Datanascimento,
        Telefone: req.body.Telefone,
        Profissao: req.body.Profissao,
        Escolaridade: req.body.Escolaridade,
        Habilidades: req.body.Habilidades,
    }).then((users) => {
        res.send(users)
    })


},

    exports.findAll = (req, res) => {
        User.findOne({
            where: {
                CPF: req.body.CPF
            }
        }).then((data) => {
            res.send(data)
        }).catch((err) => {
            console.log(err)
        })

    }

exports.consultarTudo = (req, res) => {
    User.findOne({
        where: {
            Nome: req.body.Nome,
            CPF: req.body.CPF,
            Datanascimento: req.body.Datanascimento,
        }
    }).then((data) => {
        res.send(data)
    }).catch((err) => {
        console.log(err)
    })

},

    exports.remove = (req, res) => {
        User.destroy({
            where: {
                CPF: req.body.CPF

            }
        }).then(() => {
            res.send('Usuario Excluido')
        })

    },



    exports.editar = (req, res) => {


        User.update({
            Nome: req.body.Nome,
            Datanascimento: req.body.Datanascimento,
            Telefone: req.body.Telefone,
            Profissao: req.body.Profissao,
            Escolaridade: req.body.Escolaridade,
            Habilidades: req.body.Habilidades,
        }, {
            where: {
                CPF: req.body.CPF
            }
        }
        ).then((data) => {
            res.send(data)
        }).catch((err) => {
            console.log(err)
        })


    }



