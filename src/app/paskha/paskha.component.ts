import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css']
})
export class PaskhaComponent implements OnInit {

  keyYear: number; // Главный ключ
  timeBox: any;
  lastEaster: any;
  nextEaster: any;
  paskhaCurrentYear: any;

  pashalia: any = {
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

  months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "май",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ]



  constructor() {

    
    { // spr1
      this.timeBox = new Date();
      var currentYear = this.timeBox.getFullYear();
      this.paskhaCurrentYear = new Date(this.timeBox.getFullYear(), this.pashalia[currentYear][0], this.pashalia[currentYear][1])


      // Вычисление разницы времен
      var dateDeference = this.paskhaCurrentYear - this.timeBox;

      if (dateDeference < 0)
      {

    // ---------------------------
        this.keyYear = 1;
    // ---------------------------
        var key = (this.timeBox.getFullYear() - 1);
        this.lastEaster = 'ПАСХА БЫЛА: ' + this.pashalia[key][1] + " " + this.months[this.pashalia[currentYear][0]];

        this.nextEaster = "ПАСХА БУДЕТ: " + this.pashalia[currentYear][1] + " " + this.months[this.pashalia[currentYear][0]];
        
      }
      
      else
      {
    // ---------------------------
        this.keyYear = 0;
    // ---------------------------
    var key = (this.timeBox.getFullYear() - 1);
        this.lastEaster = 'ПАСХА БЫЛА: ' + this.pashalia[key][1] + " " + this.months[this.pashalia[currentYear][0]];

    this.nextEaster = "ПАСХА БУДЕТ: " + this.pashalia[currentYear][1] + " " + this.months[this.pashalia[currentYear][0]];

      }

    }
  }


  //  function dateEaster() {
  //   var year = 'year' + new Date().getFullYear;
  //   // this.lastEaster = year;   
  // }

  ngOnInit() {

  }

}
