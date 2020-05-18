import express from 'express'
import requestId from 'express-request-id';
import logger from './logger/logger.config';
import bodyParser from 'body-parser';

const app = express();
// Desativa o X-Powered-By: Express
app.disable('x-powered-by');

// Adiciona Id de rastreamento
app.use(requestId());

// Parse body
app.use(bodyParser.json());

// Rota raiz com o texto Hello World!
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Porta onde o servidor ficará ouvindo
const server = app.listen(process.env.PORT || 8081, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})