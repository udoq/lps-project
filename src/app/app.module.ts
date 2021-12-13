import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { TestingComponent } from './testing/testing.component';
import { TryingComponent } from './trying/trying.component';
import { SummaryComponent } from './summary/summary.component';
import { QuestionComponent } from './question/question.component';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QAndAComponent } from './q-and-a/q-and-a.component';


@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    TestingComponent,
    TryingComponent,
    SummaryComponent,
    QuestionComponent,
    HeaderComponent,
    WelcomeComponent,
    QAndAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: true,
        //  pedantic: false,
        //  sanitize: false,
        //  smartLists: true,
        //  smartypants: false,
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
