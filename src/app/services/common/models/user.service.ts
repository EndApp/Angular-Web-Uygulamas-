import { Injectable } from '@angular/core';
import { firstValueFrom, observable, Observable } from 'rxjs';
import { Create_User } from '../../../contracts/users/create_user';
import { List_User } from '../../../contracts/users/list_user';
import { User } from '../../../entities/user';
//import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { HttpClientService } from '../http-client.service';
import { promises } from 'dns';
import { Token } from 'src/app/contracts/TOKEN/token';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from 'src/app/contracts/TOKEN/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClientService: HttpClientService
    , private toastrService: CustomToastrService) { }

 async create(user: User): Promise<Create_User> {
  const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
  controller: "users"
   }, user);

   return await firstValueFrom(observable) as Create_User;
  }

async login(UsernameOrEmail: string, password: string,callBackFunction?:()=>void): Promise<any> {
  const observable: Observable<any | TokenResponse > = this.httpClientService.post<any|TokenResponse>({

    controller: "users",
    action: "login"
  }, { UsernameOrEmail, password });

 const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse; //token gelsın
 if(tokenResponse)
  localStorage.setItem("accessToken",tokenResponse.token.accessToken);

  this.toastrService.message("basarili","basarili",{
messageType:ToastrMessageType.Success,
position: ToastrPosition.TopRight
})
  callBackFunction();
}
}
/*
  async updatePassword(userId: string, resetToken: string, password: string, passwordConfirm: string, successCallBack?: () => void, errorCallBack?: (error) => void) {
    const observable: Observable<any> = this.httpClientService.post({
      action: "update-password",
      controller: "users"
    }, {
      userId: userId,
      resetToken: resetToken,
      password: password,
      passwordConfirm: passwordConfirm
    });

    const promiseData: Promise<any> = firstValueFrom(observable);
    promiseData.then(value => successCallBack()).catch(error => errorCallBack(error));
    await promiseData;
  }

  async getAllUsers(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalUsersCount: number; users: List_User[] }> {
    const observable: Observable<{ totalUsersCount: number; users: List_User[] }> = this.httpClientService.get({
      controller: "users",
      queryString: `page=${page}&size=${size}`
    });

    const promiseData = firstValueFrom(observable);
    promiseData.then(value => successCallBack())
      .catch(error => errorCallBack(error));

    return await promiseData;
  }

  async assignRoleToUser(id: string, roles: string[], successCallBack?: () => void, errorCallBack?: (error) => void) {
    const observable: Observable<any> = this.httpClientService.post({
      controller: "users",
      action: "assign-role-to-user"
    }, {
      userId: id,
      roles: roles
    });

    const promiseData = firstValueFrom(observable);
    promiseData.then(() => successCallBack())
      .catch(error => errorCallBack(error));

    await promiseData;
  }

  async getRolesToUser(userId: string, successCallBack?: () => void, errorCallBack?: (error) => void): Promise<string[]> {
    const observable: Observable<{ userRoles: string[] }> = this.httpClientService.get({
      controller: "users",
      action: "get-roles-to-user"
    }, userId);

    const promiseData = firstValueFrom(observable);
    promiseData.then(() => successCallBack())
      .catch(error => errorCallBack(error));

    return (await promiseData).userRoles;
  } */

