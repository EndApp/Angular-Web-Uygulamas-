import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Todo } from 'src/app/contracts/create_todo';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { TodoService } from 'src/app/services/common/models/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService, private todoService:TodoService,private alertify:AlertifyService) {
    super(spinner)
  }

  ngOnInit(): void {
  }
create(description:HTMLInputElement){
  this.showSpinner(SpinnerType.BallAtom);
  const create_todo:Create_Todo = new Create_Todo( );
  create_todo.description=description.value;
 // this.todoService.create(create_todo);

  this.todoService.create(create_todo,() =>{
    this.hideSpinner(SpinnerType.BallAtom);
    this.alertify.message("Görev Eklenmistir",{
      dismisOthers:true,
    messageType:MessageType.Success,
  position:Position.BottomRight
});
});
}
}
