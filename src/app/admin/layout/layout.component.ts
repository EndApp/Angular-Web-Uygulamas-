import { Component, OnInit } from '@angular/core';
declare var alertify:any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
   // this.alertify.message("merhaba",MessageType.Error,Position.TopLeft,5)
    //    alertify.alert("hello");
  //  alertify.success("basarılı");
  }

}


