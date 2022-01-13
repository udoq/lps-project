import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: string = '';
  @Output() questionClicked = new EventEmitter();



  constructor() { }

  ngOnInit(): void {}

  questionSelected() {
    this.questionClicked.emit()
  }

}
