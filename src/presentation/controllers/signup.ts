import { MissingParamError } from '../errors/missing-param-error'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFileds = ['name', 'email']
    for (const field of requiredFileds) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
