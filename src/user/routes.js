const User = require('./model')

module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo usuário
    app.post('/', controller.create)

    //Busca o usuário pelo cpf
    app.post('/busca', controller.findAll)

    //Editar o usuário
    app.put('/edicao',controller.editar)

    //remove usuario
    app.delete('/consulta',controller.remove)

    //Busca o usuário pelo cpf, data e nome
    app.post('/consulta',controller.consultarTudo)



}