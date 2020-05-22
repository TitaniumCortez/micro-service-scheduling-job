import express from 'express';
import SchedulingController from '../controller/SchedulingController';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load(__dirname.concat('../../../swagger.yaml'));

const router = express.Router();

// Rota HealthCheck
router.get('/healthcheck', (req, res) => { res.send(200, { message: 'It\'s Alive!' }); })

// Envio de um novo job
router.post('/', (req, res, next) => SchedulingController.processJob(req, res, next));

// Documentação da api
router.use('/swagger', swaggerUi.serve);
router.get('/swagger', swaggerUi.setup(swaggerDocument));



export default router;
