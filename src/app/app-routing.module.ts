import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {ConvertorComponent} from './convertor/convertor.component';
import {MortgageComponent} from './mortgage/mortgage.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', component: MainComponent},
  {path : 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'convertor', component: ConvertorComponent},
  {path: 'mortgage', component: MortgageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
