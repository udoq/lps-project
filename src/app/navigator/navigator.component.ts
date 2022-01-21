import { Component, Input, OnInit } from '@angular/core';
import { MyDataStructur } from '../my-data-structur';
import { QuestionsIOService } from '../questions-io.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

declare const vex: any;

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent implements OnInit {
  numModus: number = 0; // 1: Lernmodus, 2: Selbsttest, 3: Prüfungsmodus
  showSummary: boolean = true;

  allQuestions: MyDataStructur[] = [];
  aktuelleFrage: number = 0;
  anzFragen: number = 0;
  anzBeantworteteFragen: number = 0;
  anzRichtigeAnworten: number = 0;
  anzFalscheAntworten: number = 0;
  progressSuccess: string = '0';
  progressFailure: string = '0';
  progressTotal: string = '0';
  submitted: boolean = false;

  constructor(
    private myService: QuestionsIOService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllQuestions();
    window.scroll(0, 0);
  }

  initialize(): void {
    this.aktuelleFrage = 0;
    this.anzBeantworteteFragen = 0;
    this.anzRichtigeAnworten = 0;
    this.anzFalscheAntworten = 0;
    this.progressSuccess = '0';
    this.progressFailure = '0';
    this.progressTotal = '0';
  }

  getAllQuestions() {
    this.myService.getData().subscribe((res) => {
      this.allQuestions = res;
      this.anzFragen = this.allQuestions.length;
      window.scroll(0, 0);
    });
  }

  onClickSummary() {
    this.numModus = 0;
    this.showSummary = true;
    this.initialize();
  }
  onClickLearning() {
    this.numModus = 1;
    this.showSummary = false;
    this.initialize();
    this.submitted = true;
  }
  onClickSelftest() {
    this.numModus = 2;
    this.showSummary = false;
    this.initialize();
    this.submitted = false;
  }

  onClickExam() {
    this.numModus = 3;
    this.showSummary = false;
    this.initialize();
    this.submitted = false;
  }

  setSingleQuestion(question: number) {
    this.aktuelleFrage = question;
    this.numModus = 1;
    this.showSummary = false;
    this.submitted = true;
    window.scroll(0, 0);
  }

  onClickFirst() {
    this.aktuelleFrage = 0;
    window.scroll(0, 0);
  }
  onClickPrev() {
    this.aktuelleFrage--;
    window.scroll(0, 0);
  }
  onClickNext() {
    if (this.numModus === 2) {
      this.submitted = false;
    }
    if (this.aktuelleFrage < this.allQuestions.length) {
      this.aktuelleFrage++;
    }
    window.scroll(0, 0);
  }
  onClickLast() {
    this.aktuelleFrage = this.allQuestions.length - 1;
    window.scroll(0, 0);
  }

  report(success: boolean) {
    this.submitted = true;
    if (success) {
      this.anzRichtigeAnworten++;
      this.progressSuccess = (
        (this.anzRichtigeAnworten * 100) /
        this.anzFragen
      ).toString();
      if (this.numModus === 2) {
        vex.dialog.alert({
          message: 'Das war gut! Weiter so...',
          className: 'vex-theme-flat-attack',
        });
      }
    } else {
      this.anzFalscheAntworten++;
      this.progressFailure = (
        (this.anzFalscheAntworten * 100) /
        this.anzFragen
      ).toString();
      if (this.numModus === 2) {
        vex.dialog.alert({
          message:
            'Leider daneben! Schau Dir die richtigen Antworten nochmal genau an.',
          className: 'vex-theme-flat-attack',
        });
      }
    }
    this.anzBeantworteteFragen =
      this.anzRichtigeAnworten + this.anzFalscheAntworten;
    this.progressTotal = (
      (this.anzBeantworteteFragen * 100) /
      this.anzFragen
    ).toString();
    if (this.numModus === 3) {
      if (this.anzFalscheAntworten > 7) {
        this.numModus = 0;
        this.showSummary = true;
        this.initialize();
        vex.dialog.alert({
          message:
            'Das waren leider zu viele falsche Antworten. Lerne lieber noch ein bisschen.',
          className: 'vex-theme-flat-attack',
        });
        window.scroll(0, 0);
      } else {
        this.onClickNext();
      }
    }
    if (this.anzBeantworteteFragen >= this.anzFragen) {
      vex.dialog.alert({
        message:
          'Prüfungsergebnis: Es wurden ' + this.anzRichtigeAnworten + ' richtig und ' + this.anzFalscheAntworten + ' falsch beantwortet.',
        className: 'vex-theme-flat-attack',
      });
  }
  }
}
