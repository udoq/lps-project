import { Component, Input, OnInit } from '@angular/core';
import { MyDataStructur } from '../my-data-structur';

import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.css']
})
export class QAndAComponent implements OnInit {

  @Input() QandA: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Q&A: ' + this.QandA.fragentext);
  }

}
