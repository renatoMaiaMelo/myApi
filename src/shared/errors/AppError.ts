export class AppError {
  public readonly messageError: string
  public readonly statusCodeError: number

  constructor(message: string, statusCode = 400) {
    this.messageError = message
    this.statusCodeError = statusCode
  }
}
