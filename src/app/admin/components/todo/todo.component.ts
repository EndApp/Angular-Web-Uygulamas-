import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
//import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent,SpinnerType } from 'src/app/base/base.component';
//import { Todo } from 'src/app/contracts/todo';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent extends BaseComponent implements OnInit {

 constructor( spinner: NgxSpinnerService,private httpClientService:HttpClientService){/*private spinner: NgxSpinnerService*/
  super(spinner);//baseclass a erişme constructer ına
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  this.httpClientService.get({
    controller:"todo"
    }).subscribe(data=>console.log(data));
}
}


