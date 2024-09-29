import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamenuComponent } from './anamenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AnamenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "",component: AnamenuComponent}
    ])
  ],

})
export class AnamenuModule { }
