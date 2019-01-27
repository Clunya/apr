import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css']
})
export class PaskhaComponent implements OnInit {

  keyYear: any; // Главный ключ
  timeBox: any;
  lastEaster: string;
  nextEaster: any;
  paskhaCurrentYear: any;
  timeBox2: any;
  currentYear: any;
  rrr: string;

  pashalia: any = {
    2015: [3, 12],
    2016: [4, 1],
    2017: [3, 16],
    2018: [3, 8],
    2019: [3, 28],
    2020: [3, 19],
    2021: [4, 2],
    2022: [3, 24],
    2023: [3, 16],
    2024: [4, 5],
    2025: [3, 20],
    2026: [3, 12],
    2027: [4, 2],
    2028: [3, 16],
    2029: [3, 8],
    2030: [3, 28],
    2031: [3, 13],
    2032: [4, 2],
    2033: [3, 24],
    2034: [3, 9],
    2035: [3, 29],
    2036: [3, 20],
    2037: [3, 5],
    2038: [3, 25]
  };

  monthsArray = [
    "января", "февраля", "марта", "апреля", "май", "июня", "июля",
    "августа", "сентября", "октября", "ноября", "декабря"
                ]



  constructor() {

        // spr1 (spravka 1 http://localhost:4200/spr)
    this.timeBox = new Date();
        
        // prb1 (problema 1, смотри видео prb-1.mov)
        // this.timeBox = new Date(2018, 11, 31);
        this.currentYear = this.timeBox.getFullYear();
        this.paskhaCurrentYear = new Date(this.timeBox.getFullYear(), this.pashalia[this.currentYear][0], this.pashalia[this.currentYear][1])


  }

  ngOnInit() {
    
    this.keyNewYear();
    // this.rrr = JSON.parse();
    
  }
  
  
  keyNewYear() { // Вычисление разницы времен, которая показывает состояние Праздника Новый год (был или нет)
      var dateDeference = this.paskhaCurrentYear - this.timeBox;

      if (dateDeference < 0) {
        
        // ---------------------------
        this.keyYear = 1; // если Нового года еще небыло в Пасхальном году
        // ---------------------------
        var lastYear = (this.timeBox.getFullYear() -1);
        console.log("Задан год: ", lastYear );
        console.log("Разность дат между текущим и заданным годами составляет:", dateDeference, "миллисекунды");

        
        this.lastEaster ="ПРОШЕДШАЯ ПАСХА: " + (this.pashalia[lastYear][1]) + " " + (this.monthsArray[this.pashalia[this.currentYear][0]]);
  
        this.nextEaster = "ГРЯДУЩАЯ ПАСХА: " + this.pashalia[this.currentYear][1] + " " + this.monthsArray[this.pashalia[this.currentYear][0]] + " в " + this.currentYear;
  
      }
  
      else {
        // ---------- НГ был -----------------
        this.keyYear = 0;
        // ---------------------------
        var key = (this.timeBox.getFullYear() -1);
        this.lastEaster = 'ПРОШЕДШАЯ ПАСХА: ' + this.pashalia[key][1] + " " + this.monthsArray[this.pashalia[this.currentYear][0]];
  
        this.nextEaster = "ГРЯДУЩАЯ ПАСХА: " + this.pashalia[this.currentYear][1] + " " + this.monthsArray[this.pashalia[this.currentYear][0]];
  
      }
}

}
