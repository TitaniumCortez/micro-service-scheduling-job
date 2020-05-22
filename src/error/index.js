class BadRequest extends Error {
    constructor(error = {}) {
        super(error.message)

        this.statusCode = 400
        this.name = 'BadRequest'
        this.type = 'Bad Request'
    }
}

class NotFound extends Error {
    constructor(error = {}) {
        super(error.message)

        this.statusCode = 404
        this.name = 'NotFound'
        this.type = 'Not Found'
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

export { BadRequest, InternalError , NotFound };