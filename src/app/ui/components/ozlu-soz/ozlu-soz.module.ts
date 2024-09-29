import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OzluSozComponent } from './ozlu-soz.component';



@NgModule({
  declarations: [
    OzluSozComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "",component: OzluSozComponent}
    ])
  ]
})
export class OzluSozModule { }
