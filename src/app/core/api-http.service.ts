import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http :HttpClient) { }

  get<T>(url:string):Observable<ApiResponse<T>>
  {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}/${url}`)
  }

   getById<T>(url:string, id: string):Observable<ApiResponse<T>>
   {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}/${url}/${id}`)
    }
}
