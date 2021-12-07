import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() questions: any;

  aktuelleFrage: number = 0;
  selectedItems: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('Start SummaryComponent')
    console.log(this.questions[0]?.fragentext);
  }

  setAnswers(e: any, id: number) {

    this.selectedItems[id] = e.target.checked;
    console.log(this.selectedItems);
  }

  nextQuestion() {
    if (this.aktuelleFrage < this.questions.length-1) {
      this.aktuelleFrage++;
      this.selectedItems = [];
    }
  }


}
