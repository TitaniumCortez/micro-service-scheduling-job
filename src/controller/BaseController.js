import { SchedulingJobServices } from '../services/schedulingJob.services';
import { InternalError } from '../error';

export class BaseController {


    constructor() {
        this.schedulingJobServices = new SchedulingJobServices();
    }

    _sendMenssage({ statusCode, response, data }) {
        return response.send(data);
    };

    _handlerError({ response, error }) {
        if (!error.statusCode)
            error = new InternalError();

        const { statusCode, type } = error;
        return response.status(statusCode).send({ code: statusCode, message: type });
    };

}

