import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoModule } from './todo/todo.module';
import { AnamenuModule } from './anamenu/anamenu.module';
import { VkeModule } from './vke/vke.module';
import { OzluSozModule } from './ozlu-soz/ozlu-soz.module';
import { WeatherModule } from './weather/weather.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // PrimeNG animasyonları için
@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    TodoModule,
    AnamenuModule,
    VkeModule,
    OzluSozModule,
    WeatherModule,
    RegisterModule,
    LoginModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,

  ],
  exports: [
    VkeModule,
    TodoModule,
    AnamenuModule,
    OzluSozModule,
    WeatherModule,
    RegisterModule,
    LoginModule,
  ]
})
export class ComponentsModule { }


