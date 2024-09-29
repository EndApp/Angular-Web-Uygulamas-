import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { TodoComponent } from './ui/components/todo/todo.component';
import { TodoModule } from './ui/components/todo/todo.module';
import { AnamenuComponent } from './ui/components/anamenu/anamenu.component';
import { RegisterComponent } from './ui/components/register/register.component';
import { LoginComponent } from './ui/components/login/login.component';
import { AuthGuard } from './guards/common/auth.guard';
const routes: Routes = [
  {
     path: "", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "todo",
        loadChildren: () => import("./admin/components/todo/todo.module").then(module => module.todoModule) },
        { path: "todo", loadChildren: () => import("./admin/components/todo/todo.module").then(module => module.todoModule) },
        { path: "vke", loadChildren: () => import("./ui/components/vke/vke.module").then(module => module.VkeModule) },



    ],canActivate:[AuthGuard] //IZIN VERIRSEK GUARDDAN O ZAMAN AL
  },
  { path: "", component: AnamenuComponent },
 // { path: "todo", loadChildren: () => import("./admin/components/todo/todo.module").then(module => module.todoModule) },
  { path: "ozlusoz", loadChildren: () => import("./ui/components/ozlu-soz/ozlu-soz.module").then(module => module.OzluSozModule) },
 // { path: "vke", loadChildren: () => import("./ui/components/vke/vke.module").then(module => module.VkeModule) },
  { path: "register", loadChildren: () => import("./ui/components/register/register.module").then(module => module.RegisterModule) },
  { path: "login", loadChildren: () => import("./ui/components/login/login.module").then(module => module.LoginModule) },
  { path: "Weather", loadChildren: () => import("./ui/components/weather/weather.module").then(module => module.WeatherModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], //import ediliyorki anamodulde kullanılabılsın
  exports: [RouterModule]
})
export class AppRoutingModule { }





