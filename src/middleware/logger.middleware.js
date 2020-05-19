import logger from '../logger/logger.config';


const loggerMiddleware = (req, res, next) => {
    logger.info('loggerInstance', { id: req.id, ...req.headers, body: req.body });
    next();
}


export default loggerMiddleware;