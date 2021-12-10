export interface MyDataStructur {
  id: number;
  fragentext: string;
  antworten: {text: string, correct: boolean} [];
}
