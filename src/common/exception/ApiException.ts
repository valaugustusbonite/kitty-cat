export class ApiException extends Error {
  message: string

  constructor({
    message
  }: {
    message: string
  }) {
    super()
    this.message = message
  }  
}