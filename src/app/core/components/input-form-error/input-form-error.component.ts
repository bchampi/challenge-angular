import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { errorsDictionary } from './error.dict'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-input-form-error',
  template: `
    <ng-container
      *ngIf="control.invalid && (control.touched || control.dirty)">
      <p class="mt-2 font-medium text-pink-600 text-sm">
        {{ errorMsg }}
      </p>
    </ng-container>
  `,
})

export class InputFormErrorComponent {
  @Input() control!: AbstractControl

  get errorMsg(): string {
    const errorCode = this.control.errors
    const code = errorCode ? Object.keys(errorCode)[0] : ''

    return errorsDictionary[code] || 'Hay un error en el campo. (código de error inválido)'
  }
}
