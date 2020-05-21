import { BaseController } from './BaseController';
import { SchedulingJobServices } from '../services/schedulingJob.services';

class SchedulingController extends BaseController {

    constructor() {
        this.schedulingJobServices = new SchedulingJobServices();
    }

    /**
     * @description Ordena os jobs a serem executados no periodo
     * 
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * 
     * @returns 
     */
    async processJob(request, response, next) {
        this.schedulingJobServices.processJob(request.body).then((data) => this._sendMenssage({ statusCode: 200, response, data })).catch((error) => this._handlerError(error));
    }
}

export default new SchedulingController();