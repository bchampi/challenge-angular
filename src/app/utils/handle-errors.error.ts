import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'
import Swal from 'sweetalert2'
import { ErrorsDictionary } from '../core/components/input-form-error/error.dict'

const messageError: ErrorsDictionary = {
  0: 'Hubo un error en obtener respuesta. Intentelo más tarde.',
  400: 'Bad Request',
  401: 'Las credenciales ingresadas son incorrectas. Intentelo nuevamente.',
  403: 'Forbidden',
  404: 'Not Found',
  505: 'Internal Server Error',
}

export const handleError = (httpError: HttpErrorResponse) => {
  let errorMessage = ''
  if (httpError.error instanceof ErrorEvent) errorMessage = httpError.error.message
  else errorMessage = `Error Code: ${httpError.status}\nMessage: ${httpError.message}`

  const message = messageError[httpError.status]
  Swal.fire(
    '¡Error!',
    message || 'Código de error inválido.',
    'error',
  )

  return throwError(() => new Error(errorMessage))
}
