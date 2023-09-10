const mustache = require('mustache');
const axios = require('../axios_config');
const fs = require('fs/promises');

const enviarEmail = async (nome, email) => {

    try {
        const template = await fs.readFile('./src/extras/boasVindas.html', 'utf-8');

        const variaveis = {
            nome: nome
        };

        const conteudoHtml = mustache.render(template, variaveis);

        const data = {
            "sender": {
                "name": "Ewerton Hecsley",
                "email": "ewerton.martinscomercial@gmail.com"
            },
            "to": [
                {
                    "email": email,
                    "name": nome
                }
            ],
            "subject": "Bem-vindo(a)",
            "htmlContent": conteudoHtml
        };

        return await axios.post('', data)

    } catch (error) {
        return error.message
    };
};

module.exports = { enviarEmail }