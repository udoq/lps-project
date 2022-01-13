import { Component, Input, OnInit } from '@angular/core';
import { MyDataStructur } from '../my-data-structur';
import { QuestionsIOService } from '../questions-io.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  numModus: number = 0;   // 1: Lernmodus, 2: Selbsttest, 3: Prüfungsmodus
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

  constructor(private myService: QuestionsIOService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuestions();
    window.scroll(0,0);
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
    this.myService.getData()
    .subscribe(res=>{
      this.allQuestions = res;
      this.anzFragen = this.allQuestions.length;
    })
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
  }
  onClickSelftest() {
    this.numModus = 2;
    this.showSummary = false;
    this.initialize();
  }

  onClickExam() {
    this.numModus = 3;
    this.showSummary = false;
    this.initialize();
  }


  setSingleQuestion(question: number) {
    this.aktuelleFrage = question;
    console.log('Einzelne Frage ausgewählt: ' + question);
    this.numModus = 1;
    this.showSummary = false;
    window.scroll(0,0);
  }


  onClickFirst() {
    this.aktuelleFrage=0;
    window.scroll(0,0);
  }
  onClickPrev() {
    this.aktuelleFrage--;
    window.scroll(0,0);
  }
  onClickNext() {
    this.aktuelleFrage++;
    window.scroll(0,0);
  }
  onClickLast() {
    this.aktuelleFrage=this.allQuestions.length-1;
    window.scroll(0,0);
  }

  report (success: boolean) {
    if (success) {
      this.anzRichtigeAnworten++;
      this.progressSuccess = (this.anzRichtigeAnworten * 100 / this.anzFragen).toString();
      //ToDo: Popup mit Erfolgsmeldung
    } else {
      this.anzFalscheAntworten++;
      this.progressFailure = (this.anzFalscheAntworten* 100 / this.anzFragen).toString();
      //ToDo: Popup mit aufmunternden Worten
    }
    console.log('Erfolg: ' + this.progressSuccess)
    console.log('Misserfolg: ' + this.progressFailure)
    this.anzBeantworteteFragen = this.anzRichtigeAnworten + this.anzFalscheAntworten;
    this.progressTotal = (this.anzBeantworteteFragen* 100 / this.anzFragen).toString();
    if (this.numModus===3 && this.anzFalscheAntworten > 2) {
      this.numModus = 0;
      this.showSummary = true;
      this.initialize();
      window.scroll(0,0);
      //ToDo: Popup mit Misserfolgs-Meldung
    }
  }

}
