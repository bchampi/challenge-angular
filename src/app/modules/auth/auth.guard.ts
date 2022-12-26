import { Injectable } from '@angular/core'
import {
  CanActivate, CanActivateChild, CanLoad, Router, UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}

  private isUserLoggedIn(flag: boolean) {
    if (!flag) {
      this.router.navigate(['/login'])
      Swal.fire('Acceso Denegado', 'Debe iniciar sesión para poder ingresar al sistema.', 'error')
    }
  }

  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    return true
  }

  canActivateChild(): Observable<boolean | UrlTree> | boolean | UrlTree {
    // Consultar al servidor si el token existe y validar
    const token = !!(localStorage.getItem('token'))
    this.isUserLoggedIn(token)
    return token
  }

  canLoad(): Observable<boolean | UrlTree> | boolean | UrlTree {
    // Consultar al servidor si el token existe y validar
    const token = !!(localStorage.getItem('token'))
    this.isUserLoggedIn(token)
    return token
  }
}
