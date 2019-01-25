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
  rrr: any;

  pashalia: any = {
    'year2018': ["апрель", 8],
    'year2019': ["апрель", 28],
    'year2020': ["апрель", 19],
    'year2021': ["май", 2],
    'year2022': ["апрель", 24],
    'year2023': ["апрель", 16],
    'year2024': ["май", 5],
    'year2025': ["апрель", 20],
    'year2026': ["апрель", 12],
    'year2027': ["май", 2],
    'year2028': ["апрель", 16],
    'year2029': ["апрель", 8],
    'year2030': ["апрель", 28],
    'year2031': ["апрель", 13],
    'year2032': ["май", 2],
    'year2033': ["апрель", 24],
    'year2034': ["апрель", 9],
    'year2035': ["апрель", 29],
    'year2036': ["апрель", 20],
    'year2037': ["апрель", 5],
    'year2038': ["апрель", 25]
  }



  constructor() {

    { // spr 1
      this.timeBox = new Date();
      var currentYear = 'year' + this.timeBox.getFullYear();
      this.rrr = new Date(this.timeBox.getFullYear(), this.pashalia[currentYear][0], this.pashalia[currentYear][1])

      if (Math.trunc(this.timeBox - this.rrr) > 0) {

        // Здесь код для года следующей Пасхи

      }
      else {
        var key = 'year' + (this.timeBox.getFullYear() - 1);
        this.lastEaster = 'ПАСХА БЫЛА ' + (this.timeBox.getFullYear() - 1) + "/" + (this.pashalia[key][0]) + "/" + (this.pashalia[key][1])
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
