import { Injectable } from '@angular/core'
import { tap } from 'rxjs'
import { Router } from '@angular/router'
import { TokenData, Credentials } from '../models/Auth.model'
import { GlobalService } from './Global.service'

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private router: Router,
    private globalS: GlobalService,
  ) { }

  logIn(credentials: Credentials) {
    return this.globalS.getDataByPost<TokenData, Credentials>('http://challenge-react.alkemy.org/', credentials)
      .pipe(
        tap(({ token }) => this.handleSuccesfulLogin(token)),
      )
  }

  handleSuccesfulLogin(token: string) {
    localStorage.setItem('token', token)
    this.router.navigate(['/products'])
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
}
