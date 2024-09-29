import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/common/auth.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  constructor(private http: HttpClient,public authSerice : AuthService,
    private toastrService:CustomToastrService,
    private Router: Router
  ) {
    authSerice.identityCheck();
  }
    signOut(){
      localStorage.removeItem("accessToken");
      this.authSerice.identityCheck();
      this.Router.navigate([""])
      this.toastrService.message("oturumunuz kapatilmiştir!","oturum kapatildi",{
        messageType: ToastrMessageType.Warning,
        position:ToastrPosition.TopRight
      })
    }

  ngOnInit() {

  }
  }


