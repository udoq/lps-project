import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: any;

  @ViewChild('name') nameKey!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("name");
  }

  setName() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}
