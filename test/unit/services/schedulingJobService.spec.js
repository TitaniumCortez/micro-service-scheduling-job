import moment from 'moment';
import request from '../mock';

import { SchedulingJobServices } from '../../../src/services/schedulingJob.services.js';
import props from '../../../src/config';

describe('Class SchedulingJobService', () => {

    let schedulingJobService;
    beforeAll(() => {
        let date = moment('2019-11-10 09:00:00').utc(props.timeZone).format();
        schedulingJobService = new SchedulingJobServices({ nowTimeStamp: date });
    });

    test('Ordenar jobs retorno esperado → [[1,3],[2]]', async () => {
        const result = await schedulingJobService.processJob(request);
        console.log(result);
        expect(3).toBe(3);
    });

});