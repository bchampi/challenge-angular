import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/services/Auth.service'
import { validControlCustomInput } from 'src/app/utils/functions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
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
    private fb: FormBuilder,
    private authS: AuthService,
  ) {}

  ngOnInit() {
    console.log()
  }

  signIn() {
    const { email, password } = this.formLogin.getRawValue()
    const data = {
      email: email as string,
      password: password as string,
    }

    this.formLogin.markAsPending()
    this.authS.logIn(data).subscribe({
      error: () => this.formLogin.setErrors({ invalidCredential: true }),
    })
  }
}
