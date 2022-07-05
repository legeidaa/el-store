class ApiError extends Error{
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message) { //статические методы можно вызывать без создания экземпляра класса
        return new ApiError(404, message)
    }
    static internal(message) { //статические методы можно вызывать без создания экземпляра класса
        return new ApiError(500, message)
    }
    static forbidden(message) { //статические методы можно вызывать без создания экземпляра класса
        return new ApiError(403, message)
    }
}

module.exports = ApiError