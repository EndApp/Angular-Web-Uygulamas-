import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { todoModule } from './todo/todo.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    todoModule,
    DashboardModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class ComponentsModule { }
