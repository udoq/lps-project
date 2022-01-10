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

  bLernen: boolean = true;
  bSelbstest: boolean = false;
  bPruefung: boolean = false;

  constructor(private myService: QuestionsIOService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }
  getAllQuestions() {
    this.myService.getData()
    .subscribe(res=>{
      this.allQuestions = res;
    })
  }

  onClickFirst() {
    this.aktuelleFrage=0;
  }
  onClickPrev() {
    this.aktuelleFrage--;
  }
  onClickNext() {
    this.aktuelleFrage++;
  }
  onClickLast() {
    this.aktuelleFrage=this.allQuestions.length-1;
  }

}
