import { SchedulingJobServices } from '../services/schedulingJob.services';

export class BaseController {


    constructor() {
        this.schedulingJobServices = new SchedulingJobServices();
    }

    _sendMenssage() { };
    _handlerError() { };

}

