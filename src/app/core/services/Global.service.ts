import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, throwError } from 'rxjs'
import { messageError } from 'src/app/utils/functions'
import { environment } from 'src/environments/environment'

import Swal from 'sweetalert2'

const baseUrl = `${environment.apiEndpoint}`

@Injectable({
  providedIn: 'root',
})

export class GlobalService {
  constructor(
    private http: HttpClient,
  ) { }

  getAuthHeaders = () => new HttpHeaders({
    'Content-Type': 'application/json',
  })

  private handleError(httpError: HttpErrorResponse) {
    let errorMessage = ''
    if (httpError.error instanceof ErrorEvent) errorMessage = httpError.error.message
    else errorMessage = `Error Code: ${httpError.status}\nMessage: ${httpError.message}`

    const message = messageError[httpError.status]
    Swal.fire('¡Error!', message || 'Código de error inválido.', 'error')

    return throwError(() => new Error(errorMessage))
  }

  getAllBase<T>(path: string) {
    return this.http.get<T>(`${baseUrl}${path}`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError),
      )
  }

  getDataByPost<T, U>(path: string, data: U) {
    return this.http.post<T>(`${baseUrl}${path}`, data, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError),
      )
  }

  getByIdBase<T>(path: string, pk: number) {
    return this.http.get<T>(`${baseUrl}${path}${pk}/`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError),
      )
  }

  createBase<T, U>(path: string, data: U) {
    return this.http.post<T>(`${baseUrl}${path}`, data, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError),
      )
  }

  updateBase<T, U>(path: string, pk: number, data: U) {
    return this.http.put<T>(`${baseUrl}${path}${pk}/`, data, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError),
      )
  }

  deleteBase<T>(path: string, pk: number) {
    return this.http.delete<T>(`${baseUrl}${path}${pk}/`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError),
      )
  }
}
