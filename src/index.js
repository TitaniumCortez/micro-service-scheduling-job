import express from 'express'
import requestId from 'express-request-id';
import loggerMiddleware from './middleware/logger.middleware';
import bodyParser from 'body-parser';
import router from './router';
import props from './config';

const app = express();

// Desativa o X-Powered-By: Express
app.disable('x-powered-by');

// Adiciona Id de rastreamento
app.use(requestId());

// Parse body
app.use(bodyParser.json());

// Logger Middleware
app.use(loggerMiddleware);

// Configurando as rotas
app.use(`/${props.application_prefix}`, router);

// Porta onde o servidor ficará ouvindo
const server = app.listen(props.port, () => {
  console.log(`Express running → PORT ${server.address().port}`)
})