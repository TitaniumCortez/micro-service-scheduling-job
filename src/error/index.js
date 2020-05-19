class NoDataError extends Error {
    constructor(error = {}) {
        super(error.message)

        this.name = 'NotFoundError'
        this.type = 'not_found'
    }
}


class InternalError extends Error {
    constructor(error = {}) {
        super(error.message)

        this.name = 'InternalError'
        this.type = 'Internal Error'
    }
}