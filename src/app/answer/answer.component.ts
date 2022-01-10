import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answers: any;
  @Input() modus: number = 2;   // 1: Lernmodus, 2: Selbsttest, 3: Prüfungsmodus

  bShowAnswers: boolean = false;
  click : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.modus == 1) {
      this.click = true;
      this.bShowAnswers = true;
    }
    if (this.modus == 2) {
      this.bShowAnswers = false;
      this.click = false;
    }
    if (this.modus == 3) {}
  }

  onSubmitClick() {
    this.bShowAnswers = true;
    this.click = !this.click;
    console.log('Submit Clicked')
  }

}
