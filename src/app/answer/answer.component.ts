import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answers: any;
  @Input() modus: number = 1;   // 1: Lernmodus, 2: Selbsttest, 3: Prüfungsmodus
  @Output() eSuccess = new EventEmitter<boolean>();

  anzahlRichtigeAntwortenSoll: number = 0;
  anzahlRichtigeAntwortenIst: number = 0;
  bShowAnswers: boolean = false;
  click : boolean = false;

  constructor() { }

  ngOnInit(): void {}

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

    this.anzahlRichtigeAntwortenSoll = 0;
    this.anzahlRichtigeAntwortenIst = 0;
    for (let i=0; i<this.answers.length; i++) {
      if (this.answers[i].correct) {
        this.anzahlRichtigeAntwortenSoll++;
      }
    }
  }

  gotAnswer(option: any, e: any) {
    if (this.anzahlRichtigeAntwortenSoll>1) {
      if (e.target.checked == option.correct) {
        this.anzahlRichtigeAntwortenIst++;
      } else {
        this.anzahlRichtigeAntwortenIst--;
      }
    }
    if (this.anzahlRichtigeAntwortenSoll==1) {
      this.anzahlRichtigeAntwortenIst=0;
      if (e.target.checked == option.correct) {
        this.anzahlRichtigeAntwortenIst++;
      }
    }
  }

  onSubmitClick() {
    this.bShowAnswers = true;
    this.click = !this.click;
    if (this.anzahlRichtigeAntwortenIst == this.anzahlRichtigeAntwortenSoll) {
      this.eSuccess.emit(true);
    } else {
      this.eSuccess.emit(false);
    }
  }

}
