class BadRequest extends Error {
    constructor(error = {}) {
        super(error.message)

        this.statusCode = 400
        this.name = 'NotFoundError'
        this.type = 'Not found'
    }
}

class InternalError extends Error {
    constructor(error = {}) {
        super(error.message)

        this.statusCode = 500
        this.name = 'InternalError'
        this.type = 'Internal Error'
    }
}

export { BadRequest, InternalError };