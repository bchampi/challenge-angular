import { Injectable } from '@angular/core'
import { tap } from 'rxjs'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { TokenData, Credentials } from '../models/Auth.model'
import { GlobalService } from './Global.service'

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private router: Router,
    private cookieS: CookieService,
    private globalS: GlobalService,
  ) { }

  logIn(credentials: Credentials) {
    return this.globalS.getDataByPost<TokenData, Credentials>('http://challenge-react.alkemy.org/', credentials)
      .pipe(
        tap(({ token }) => this.handleSuccesfulLogin(token)),
      )
  }

  handleSuccesfulLogin(token: string) {
    // localStorage.setItem('token', token)
    this.cookieS.set('token', token, 4, '/')
    this.router.navigate(['/products'])
  }

  logout() {
    // localStorage.removeItem('token')
    this.cookieS.delete('token')
    this.router.navigate(['/login'])
  }
}
