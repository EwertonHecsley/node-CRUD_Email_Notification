require('dotenv').config();
const axios = require('axios');

const instaciaAxios = axios.create({
    baseURL: 'https://api.brevo.com/v3/smtp/email',
    headers: {
        'Accept': 'application/json',
        'api-key': process.env.API_KEY,
        'Content-Type': 'application/json',
    }
});

module.exports = instaciaAxios;

