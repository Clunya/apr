import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrr',
  templateUrl: './rrr.component.html',
  styleUrls: ['./rrr.component.css']
})
export class RrrComponent implements OnInit {

  
  // aa: boolean;
  // a: number = 1;
  // b: string = 'Peace to all';
  // c: [string, number] =  ["string", 1]; // кортеж
  // d: Array<number> = [1, 2, 4]; // массив
  // d2: Array<string> = ["one string","two string"]; // массив
  // public e(): void{}; // в основном для возврата функций
  // f: undefined;
  // g: null;
  data: Date;
  

  
  constructor() {
    
    // место для получения первоначальных данных
    this.data = new Date();
    
    console.log(this.data);
    
  }
  
  ngOnInit() {
  console.log("Привет Олег");
  }
}
