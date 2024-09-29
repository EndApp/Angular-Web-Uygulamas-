import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientService } from '../http-client.service';
import { Create_Todo } from 'src/app/contracts/create_todo';
import { List_Todo } from 'src/app/contracts/list_todo';
import { Observable, firstValueFrom } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   apiUrl = 'http://localhost:7290/api'; // API URL'iniz burada olmalı

  constructor(private httpClientService: HttpClientService, private http: HttpClient) {}

  // Create Todo
  create(todo: Create_Todo, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "todo"
    }, todo).subscribe(result => {
      if (successCallBack) successCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      if (errorCallBack) {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v) => {
          v.value.forEach((_v) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);
      }
    });
  }

  async read(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void):Promise< List_Todo[]>{
    const promiseData: Promise<List_Todo[]> =  this.httpClientService.get<List_Todo[]>({
    controller: "todo" //atodos da olabır
  }).toPromise();
  promiseData.then( d=> successCallBack())
   .catch((errorResponse:HttpErrorResponse)=>errorCallBack(errorResponse.message))

  return await promiseData;

  }


  async delete(id: string) {
    const deleteObservable: Observable<any>
    = this.httpClientService.delete<any>({
      controller: "todo"
    }, id);

    await firstValueFrom(deleteObservable);
  }


  // Read Todos
 /* async read(

    p0: number, p1: number, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totaltodoCount: number; todo: List_Todo[] }> {
    const promiseData: Promise<{ totaltodoCount: number; todo: List_Todo[] }> = this.httpClientService.get<{ totaltodoCount: number; todo: List_Todo[] }>({
      controller: "todo"
    }).toPromise();

    promiseData.then(d => {
      if (successCallBack) successCallBack();
    }).catch((errorResponse: HttpErrorResponse) => {
      if (errorCallBack) errorCallBack(errorResponse.message);
    });

    return await promiseData;
  }
*/
 /* // Delete Todo
  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "todo"
    }, id);

    await firstValueFrom(deleteObservable);
  }

  // Alternative Method to Get Todos
  getTodos(successCallBack: (data: any) => void, errorCallBack: (error: any) => void): void {
    this.http.get(this.apiUrl).subscribe(
      data => successCallBack(data),
      error => errorCallBack(error)
    );
  }*/
}
