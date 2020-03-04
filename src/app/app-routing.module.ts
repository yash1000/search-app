import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'dropdown',component:DropdownComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
