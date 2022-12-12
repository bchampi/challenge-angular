import { AbstractControl } from '@angular/forms'
import { ErrorsDictionary } from '../core/components/input-form-error/error.dict'

export const messageError: ErrorsDictionary = {
  0: 'Hubo un error en obtener respuesta. Intentelo más tarde.',
  400: 'Bad Request',
  401: 'Las credenciales ingresadas son incorrectas. Intentelo nuevamente.',
  403: 'Forbidden',
  404: 'Not Found',
  505: 'Internal Server Error',
}

export const validControlCustomInput = (control: AbstractControl) => {
  if (control.invalid && (control.dirty || control.touched)) {
    const errorCode = control.errors
    const countErrors = errorCode ? Object.keys(errorCode).length : 0
    return countErrors ? 'border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500' : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600'
  }

  return 'border-gray-300 focus:ring-blue-600 focus:border-blue-600'
}
