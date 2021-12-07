import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MyDataStructur } from '../my-data-structur';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  myData: MyDataStructur[] = [];
  aktuelleFrage: number = 0;
  selectedItems: boolean[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<MyDataStructur[]>("assets/fragen.json")
    .subscribe((data) => this.myData = data);
  }

}
