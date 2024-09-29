import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "",component: WeatherComponent}
    ])
  ]
})
export class WeatherModule { }
