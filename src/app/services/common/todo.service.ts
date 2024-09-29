import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   apiUrl = 'http://localhost:7290/api';
  HttpClientService: any;

  constructor(private http: HttpClient) {}

  getTodos(successCallBack: (data: any) => void, errorCallBack: (error: any) => void): void {
    this.http.get(this.apiUrl).subscribe(
      data => successCallBack(data),
      error => errorCallBack(error)
    );
  }

}
//verıtabanı ıslerı ıcın servıs olusturduk

