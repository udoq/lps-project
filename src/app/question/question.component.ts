import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: String = '';
  @Output() questionClicked = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    console.log('Button Clicked');
    this.questionClicked.emit('Hier kommt das Event')
  }

}
