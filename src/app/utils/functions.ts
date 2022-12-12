import { AbstractControl } from '@angular/forms'

export const validControlCustomInput = (control: AbstractControl) => {
  if (control.invalid && (control.dirty || control.touched)) {
    const errorCode = control.errors
    const countErrors = errorCode ? Object.keys(errorCode).length : 0
    return countErrors ? 'border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500' : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600'
  }

  return 'border-gray-300 focus:ring-blue-600 focus:border-blue-600'
}
