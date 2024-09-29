import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './ui/components/weather/weather.component';
import { VkeService } from './services/vke.service';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { JwtModule } from '@auth0/angular-jwt'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
    // Diğer bileşenler
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatPseudoCheckboxModule,
    FormsModule,
    RouterModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: () => localStorage.getItem("accessToken"),
        allowedDomains: ["localhost:7290"]
      }
    })
  ],
  providers: [
    VkeService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } , // Interceptor'u provide edin

    { provide: "baseUrl", useValue: "https://localhost:7290/api", multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
