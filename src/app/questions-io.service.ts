import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionsIOService {


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>("assets/fragen.json")
  }
}
