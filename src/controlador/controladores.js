const fs = require('fs/promises');
const funcoesExtras = require('../extras/funcoesExtras');

const cadastrarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    try {
        const response = await funcoesExtras.enviarEmail(nome, email);
        return res.status(200).send(response.data);
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);

        return res.status(500).json({
            error: 'Erro ao enviar o e-mail',
            message: error.message,
        });
    }
};


module.exports = {
    cadastrarUsuario
}