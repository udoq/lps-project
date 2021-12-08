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
  selectedItems: boolean[] = [];


  constructor(private myService: QuestionsIOService) { }

  ngOnInit(): void {
//    this.http.get<MyDataStructur[]>("assets/fragen.json")
//    .subscribe((data) => this.myData = data);
//    this.myData = this.myService.getData();
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.myService.getData()
    .subscribe(res=>{
      this.allQuestions = res;
    })
  }

}
