import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthComponent } from './auth.component'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
