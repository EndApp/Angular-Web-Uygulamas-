import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../admin/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) { }
  message(message:string,title:string,ToastrOptions:Partial<ToastrOptions>){
    this.toastr[ToastrOptions.messageType](message,title,{
      positionClass:ToastrOptions.position
    });
  }
}
export enum ToastrMessageType{
Success="success",
Info="info",
Warning="warning",
Error="error"
}
export class ToastrOptions{
messageType:ToastrMessageType;
position:ToastrPosition
}
export enum ToastrPosition{
    TopRight="toast-top-right",

}
