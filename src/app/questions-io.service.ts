import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionsIOService {


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>("assets/fragen.json")
    // return this.http.get<any>("https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/lpsapp-pjpqp/service/lps_api/incoming_webhook/webhook0")
  }
}
