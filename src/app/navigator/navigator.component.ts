import { Component, OnInit } from '@angular/core';
import { MyDataStructur } from '../my-data-structur';
import { QuestionsIOService } from '../questions-io.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  allQuestions: MyDataStructur[] = [];
  aktuelleFrage: number = 0;
  anzFragen: number = 0;
  progress: string = "0";

  anzBeantworteteFragen: number = 0;

  numModus: number = 1;

  constructor(private myService: QuestionsIOService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }
  getAllQuestions() {
    this.myService.getData()
    .subscribe(res=>{
      console.log(res);
      this.allQuestions = res;
      this.anzFragen = this.allQuestions.length;
    })
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
