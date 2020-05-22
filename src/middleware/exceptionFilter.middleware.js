import { BadRequest, InternalError, NotFound } from '../error';

const exceptionFilter = (req, res, next) => {

  switch (res.statuscode) {
    case 500:
      res.status(500).send(new InternalError());
      break;

    default:
      next();
      break;
  }
}

function clientErrorHandler(req, res, next) {
  res.status(404).send(new NotFound());
}
export { exceptionFilter, clientErrorHandler };