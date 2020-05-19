import Joi from 'joi';

const jobSchema = Joi.object().keys({
    id: Joi.number().required(),
    description: Joi.string().required(),
    maxDate: Joi.string().required(),
    estimatedTime: Joi.string().regex(/^[0-9]/).required(),
});

const jobsSchema = Joi.array().items(jobSchema).min(1).required();


export { jobsSchema };