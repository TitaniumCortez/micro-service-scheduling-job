import moment from 'moment';
import { teste_vivo, agendamento2jobs8horasCada, agendamentoDe4Jobs, agendamentoEmUmDia, tentativaDeAgendamentoForaDaJanela } from '../mock';

import { SchedulingJobServices } from '../../../src/services/schedulingJob.services.js';
const props = {
    dataInicio: '2019-11-10 09:00:00',
    dataFim: '2019-11-11 12:00:00',
};

describe('Class SchedulingJobService', () => {

    let schedulingJobService;
    beforeAll(() => {
        let date = moment('2019-11-10 09:00:00').utc(props.timeZone).format();
        schedulingJobService = new SchedulingJobServices({ startDate: props.dataInicio, endDate: props.dataFim });
    });

    it("Deve retorna o agendamento no formato → [[1,3],[2]]", async () => {
        expect(await schedulingJobService.processJob(teste_vivo)).toEqual([[1, 3], [2]]);
    });

    it("5 jobs agendados retorno  →  [[1, 3, 2], [4]]", async () => {
        expect(await schedulingJobService.processJob(agendamentoDe4Jobs)).toEqual([[1, 3, 2], [4]]);
    });

    it("Todos agendamento executados no mesmo dia e outro dia livre → [[1,3,2],[]]", async () => {
        expect(await schedulingJobService.processJob(agendamentoEmUmDia)).toEqual([[1, 3, 2], []]);
    });

    it("agendamento 2 jobs de 8 horas → [[1], [2]]", async () => {
        expect(await schedulingJobService.processJob(agendamento2jobs8horasCada)).toEqual([[1], [2]]);
    });

    it("tentativa de agendamento fora da janela → [[1],[]]", async () => {
        expect(await schedulingJobService.processJob(tentativaDeAgendamentoForaDaJanela)).toEqual([[1], []]);
    });

});

