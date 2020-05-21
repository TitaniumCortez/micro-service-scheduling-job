import { SchedulingJobServices } from '../services/schedulingJob.services';
import { InternalError } from '../error';

export class BaseController {


    constructor() {
        this.schedulingJobServices = new SchedulingJobServices();
    }

    _sendMenssage({ statusCode, response, data }) {
        return response.send(statusCode, data);
    };

    _handlerError({ response, error }) {
        if (!error.statusCode)
            error = new InternalError();

        const { statusCode, type } = error;
        return response.send(error.statusCode, { code: statusCode, message: type });
    };

}

