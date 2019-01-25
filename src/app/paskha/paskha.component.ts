import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css']
})
export class PaskhaComponent implements OnInit {

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
  }



  constructor() {

    { // spr 1
      this.timeBox = new Date();
      var currentYear = this.timeBox.getFullYear();
      this.paskhaCurrentYear = new Date(this.timeBox.getFullYear(), this.pashalia[currentYear][0], this.pashalia[currentYear][1])
      var deferentsDates = this.paskhaCurrentYear-this.timeBox;
      
      if(deferentsDates > 0) {
        
        // Здесь код для года следующей Пасхи
        this.nextEaster = deferentsDates;

      }
      else {

        var key = (this.timeBox.getFullYear() - 1);
        this.lastEaster = 'ПАСХА БЫЛА ' + (this.timeBox.getFullYear() - 1) + "/" + (this.pashalia[key][0]) + "/" + (this.pashalia[key][1]);
        this.nextEaster = deferentsDates;

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
