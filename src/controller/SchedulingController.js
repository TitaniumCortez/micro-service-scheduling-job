import { BaseController } from './BaseController';
import { SchedulingJobServices } from '../services/schedulingJob.services';


class SchedulingController extends BaseController {

    constructor() {
        this.schedulingJobServices = new SchedulingJobServices();
    }

    /**
     * @description Obtem conjunto de jobs a serem
     *  executados em  ordem
     * 
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * 
     * @returns Object 
     */
    async processJob(request, response, next) {
        const { id, description, maxDate, estimatedTime } = request;
        this.schedulingJobServices.processJob();
    }
}

export default new SchedulingController();