import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  get emailControl() {
    return this.formLogin.get('email') as AbstractControl
  }

  get passwordControl() {
    return this.formLogin.get('password') as AbstractControl
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('hola')
  }

  validControl = (control: AbstractControl) => control.invalid && (control.dirty || control.touched)

  onSubmit() {
    console.log(this.formLogin.getRawValue())
  }
}
