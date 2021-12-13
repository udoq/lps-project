import { Component, OnInit } from '@angular/core';
import { QuestionsIOService } from '../questions-io.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  allQuestions : any = [];
  aktuelleFrage: number = 0;
  bDetails: boolean = false;
  testString: string = 'Klappt das?';


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

  showSingleQuestion(id: number) {
    console.log('Events: checked with #' + id);
    this.aktuelleFrage = id;
  }


  onClickMe() {
    this.aktuelleFrage++;
    console.log('Aktuelle Frage: ' + this.aktuelleFrage)
  }


}
