/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkeComponent } from './vke.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ngModel kullanımı için gerekli

@NgModule({
  declarations: [VkeComponent],
  imports: [
    CommonModule,
    FormsModule, // ngModel kullanımı için gerekli modül
    RouterModule.forChild([
      { path: '', component: VkeComponent },
    ]),
  ],
  exports: [VkeComponent],
})
export class VkeModule {}
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkeComponent } from './vke.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [VkeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: VkeComponent },
    ]),
    InputNumberModule,
    ButtonModule,
    CardModule,
  ],
  exports: [VkeComponent],
})
export class VkeModule {}
