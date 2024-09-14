export const errorHandler = (statusCode, mesaage) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = mesaage
    return error
}