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

  params?: ParamMap;
  numModus: number = 0;   // 1: Lernmodus, 2: Selbsttest, 3: Prüfungsmodus

  allQuestions: MyDataStructur[] = [];
  aktuelleFrage: number = 0;
  anzFragen: number = 0;
  progress: string = "0";

  anzBeantworteteFragen: number = 0;

  constructor(private myService: QuestionsIOService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.params = this.route.snapshot.paramMap;
    this.numModus = Number(this.params.get('id'));
    console.log('navigator ngOnInit-Event');
    console.log('Modus: ' + this.numModus)
  }


  ngOnChange(): void {
    this.params = this.route.snapshot.paramMap;
    this.numModus = Number(this.params.get('id'));
    console.log('navigator ngOnChange-Event');
    console.log('Modus: ' + this.numModus)
  }


  getAllQuestions() {
    this.myService.getData()
    .subscribe(res=>{
      this.allQuestions = res;
      this.anzFragen = this.allQuestions.length;
    })
  }

  testClick() {
    console.log('Button geklickt');
    this.numModus++;
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
      // Popup mit Erfolgsmeldung
    } else {
      // Popup mit aufmunternden Worten
    }
    this.anzBeantworteteFragen++;
    this.progress = (this.anzBeantworteteFragen * 100 / this.anzFragen).toString();
  }

}
