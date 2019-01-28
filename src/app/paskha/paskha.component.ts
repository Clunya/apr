import { Component, OnInit } from '@angular/core';
import { XxxService } from '../xxx.service';


@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css'],
  providers:  [ XxxService ]
})
export class PaskhaComponent implements OnInit {

  keyYear: any; // Главный ключ
  timeBox: any;
  lastEaster: string;
  nextEaster: any;
  paskhaCurrentYear: any;
  timeBox2: any;
  currentYear: any;
  public rrr: any;
  keyNewYearKey: string;
   private paskhalia: any;

  // paskhalia: any = {
  //   2015: [3, 12],
  //   2016: [4, 1],
  //   2017: [3, 16],
  //   2018: [3, 8],
  //   2019: [3, 28],
  //   2020: [3, 19],
  //   2021: [4, 2],
  //   2022: [3, 24],
  //   2023: [3, 16],
  //   2024: [4, 5],
  //   2025: [3, 20],
  //   2026: [3, 12],
  //   2027: [4, 2],
  //   2028: [3, 16],
  //   2029: [3, 8],
  //   2030: [3, 28],
  //   2031: [3, 13],
  //   2032: [4, 2],
  //   2033: [3, 24],
  //   2034: [3, 9],
  //   2035: [3, 29],
  //   2036: [3, 20],
  //   2037: [3, 5],
  //   2038: [3, 25]
  // };

   monthsArray: any  = [
    "января", "февраля", "марта", "апреля", "май", "июня", "июля",
    "августа", "сентября", "октября", "ноября", "декабря"
                  ]
  



  constructor(xxxService:XxxService) {
    this.paskhalia = xxxService.getPaskhalia();

        // spr1 (spravka 1 http://localhost:4200/spr)
        this.timeBox = new Date();
        
        // prb1 (problema 1, смотри видео prb-1.mov)
        this.currentYear = this.timeBox.getFullYear();
        this.paskhaCurrentYear = new Date(this.timeBox.getFullYear(), this.paskhalia[this.currentYear][0], this.paskhalia[this.currentYear][1])


  }

  ngOnInit() {

    
     // Вычисление разницы времен, которая показывает состояние Праздника Новый год (был или нет)
    
     var dateDeference = this.paskhaCurrentYear - this.timeBox;
      
     if (dateDeference < 0) {
       
       // ---------------------------
       // если НГ небыло в Пасхальном году
       this.keyYear = (this.timeBox.getFullYear())+1;
     // ---------------------------
       
       this.keyNewYear(this.keyYear);
       this.keyNewYearKey = "1"
     }
 
     else {
        
       // ---------------------------
       // если НГ был в текущем Пасхальном году
       this.keyYear = (this.timeBox.getFullYear());
       this.keyNewYearKey = "0"
     // ---------------------------
       
        this.keyNewYear(this.keyYear);
        this.keyNewYearKey = "1"
     }
    
  }

  keyNewYear(keyYear: number) {
    
    this.lastEaster = "ПРОШЕДШАЯ ПАСХА: " + (this.paskhalia[keyYear-1][1]) + " " + (this.monthsArray[this.paskhalia[this.currentYear][0]]);

    this.nextEaster = "ГРЯДУЩАЯ ПАСХА: " + this.paskhalia[this.keyYear][1] + " " + this.monthsArray[this.paskhalia[this.keyYear][0]] + " в " + this.keyYear + " году.";
    
      }
}
