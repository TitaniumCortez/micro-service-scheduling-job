import winston from 'winston';
import options from './logger.options';

const { format } = winston;
//Configurando log do microsservico

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: format.combine(
                format.timestamp(),
                format.colorize(),
                format.simple())
        })
    ]
});


export default logger;
