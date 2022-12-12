import { Component } from '@angular/core'
import {
  AbstractControl, NonNullableFormBuilder, Validators,
} from '@angular/forms'
import { AuthService } from 'src/app/core/services/Auth.service'
import { validControlCustomInput } from 'src/app/utils/functions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent {
  formLogin = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  })

  validControl = validControlCustomInput

  get emailControl() {
    return this.formLogin.get('email') as AbstractControl
  }

  get passwordControl() {
    return this.formLogin.get('password') as AbstractControl
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private authS: AuthService,
  ) {}

  signIn() {
    const sendData = {
      ...this.formLogin.getRawValue(),
    }

    this.formLogin.markAsPending()
    this.authS.logIn(sendData).subscribe({
      error: () => this.formLogin.setErrors({ invalidCredential: true }),
    })
  }
}
