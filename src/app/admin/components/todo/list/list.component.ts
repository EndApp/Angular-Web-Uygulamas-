import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {_MatTableDataSource, MatTableDataSource} from '@angular/material/table'
import { error } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Todo } from 'src/app/contracts/list_todo';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { TodoService } from 'src/app/services/common/models/todo.service';
import {ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
declare var $:any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit
 {
getTodos() {
throw new Error('Method not implemented.');
}

  constructor(spinner: NgxSpinnerService,
    private TodoService: TodoService,
    private alertifyService: AlertifyService,
) {
    super(spinner)
  }

  displayedColumns: string[] = ['description','delete']; //kolon ısımlerı
  dataSource : MatTableDataSource<List_Todo>= null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

 async ngOnInit() {
  this.showSpinner(SpinnerType.BallAtom)
const allTodos : List_Todo[]=  await this.TodoService.read(()=>this.hideSpinner
(SpinnerType.BallAtom),errorMessage=>      this.alertifyService.message(errorMessage,
      {
        dismisOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      }))
     this.dataSource= new MatTableDataSource<List_Todo>(allTodos);
  }

 //delete(id: string, event) { //anımasyonla sılme ıslemı yaptık
   // const img: HTMLImageElement =event.srcElement;
    //$(img.parentElement.parentElement).fadeOut(2000);
 //}

}



  /* async getTodos() {
    this.showSpinner(SpinnerType.BallAtom);
   const allTodos: {
      totalTodoCount: number; Todos: List_Todo[] } = await this.TodoService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.message(errorMessage, {
      dismisOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Todo>(allTodos.Todos);
    this.paginator.length = allTodos.totalTodoCount;
  }*/
