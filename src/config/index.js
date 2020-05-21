export default {
    port: process.env.port || 8081,
    application_prefix: process.env.application_prefix || 'scheduling',
    timeZone: 'America/Sao_Paulo',
    formatDate: 'YYYY-MM-DD HH:MM:ss',
    periodoExecucao: 8
}