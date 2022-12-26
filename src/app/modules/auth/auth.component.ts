import { Component } from '@angular/core'
import {
  AbstractControl, NonNullableFormBuilder, Validators,
} from '@angular/forms'
import { AuthService } from 'src/app/core/services/Auth.service'
import { validControlCustomInput } from 'src/app/utils/functions'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

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

  constructor(
    private fb: NonNullableFormBuilder,
    private cookieS: CookieService,
    private router: Router,
    private authS: AuthService,
  ) {
    if (this.cookieS.check('token')) this.router.navigate(['/home'])
  }

  get emailControl() {
    return this.formLogin.get('email') as AbstractControl
  }

  get passwordControl() {
    return this.formLogin.get('password') as AbstractControl
  }

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
