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

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    TestingComponent,
    TryingComponent,
    SummaryComponent,
    QuestionComponent
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
