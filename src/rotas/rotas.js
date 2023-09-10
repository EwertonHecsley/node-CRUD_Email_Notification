const { Router } = require('express');
const { cadastrarUsuario } = require('../controlador/controladores');
const rota = Router();

rota.post('/cadastro', cadastrarUsuario);

module.exports = rota;