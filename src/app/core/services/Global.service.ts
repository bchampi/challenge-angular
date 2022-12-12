import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError } from 'rxjs'
import { handleError } from 'src/app/utils/handle-errors.error'
import { environment } from 'src/environments/environment'

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

  getAllBase<T>(path: string) {
    return this.http.get<T>(`${baseUrl}${path}`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(handleError),
      )
  }

  getDataByPost<T, U>(path: string, data: U) {
    return this.http.post<T>(`${baseUrl}${path}`, data, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(handleError),
      )
  }

  getByIdBase<T>(path: string, pk: number) {
    return this.http.get<T>(`${baseUrl}${path}${pk}/`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(handleError),
      )
  }

  createBase<T, U>(path: string, data: U) {
    return this.http.post<T>(`${baseUrl}${path}`, data, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(handleError),
      )
  }

  updateBase<T, U>(path: string, pk: number, data: U) {
    return this.http.put<T>(`${baseUrl}${path}${pk}/`, data, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(handleError),
      )
  }

  deleteBase<T>(path: string, pk: number) {
    return this.http.delete<T>(`${baseUrl}${path}${pk}/`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(handleError),
      )
  }
}
