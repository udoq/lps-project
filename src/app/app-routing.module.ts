import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { QuestionComponent } from './question/question.component';
import { SummaryComponent } from './summary/summary.component';
import { TestingComponent } from './testing/testing.component';
import { TryingComponent } from './trying/trying.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo: 'welcome', pathMatch: "full"},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'trying', component: TryingComponent},
  {path: 'testing', component: TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
