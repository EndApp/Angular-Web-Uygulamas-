import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VKEModel {
  boy: number;
  kilo: number;
  vke?: number;
  vkeSonuc?: string;
}

@Injectable({
  providedIn: 'root',
})
export class VkeService {
   apiUrl = 'https://localhost:7290/api/VKE/hesapla'; // API URL'iniz burada olmalı

  constructor(private http: HttpClient) {}

  hesapla(model: VKEModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, model);
  }
}
