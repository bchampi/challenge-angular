import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { InputFormErrorComponent } from 'src/app/core/components/input-form-error/input-form-error.component'
import { AuthComponent } from './auth.component'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, InputFormErrorComponent],
})
export class AuthModule {}
