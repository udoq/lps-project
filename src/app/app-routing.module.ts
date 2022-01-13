import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigatorComponent } from './navigator/navigator.component';

const routes: Routes = [
  {path:'', redirectTo: 'navigator/1', pathMatch: "full"},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'navigator/:id', component: NavigatorComponent}
  // {path: 'navigator/:id', component: NavigatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
