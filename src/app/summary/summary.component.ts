import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() questions: any;
  @Output() questionClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  showSingleQuestion(id: number) {
    this.questionClicked.emit(id);
  }

}
