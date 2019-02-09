/**
* Компонент вычисляющий прошедшую и грядущую Пасхи.
* 
*/
import { Component, Injectable, OnInit } from '@angular/core';
import { XxxService } from '../xxx.service';

@Injectable()
@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css'],
  providers: [XxxService]
})
export class PaskhaComponent implements OnInit {

  keyYear: any; // Главный ключ
  timeBox: any;
  lastEaster: string;
  nextEaster: string;
  paskhaCurrentYear: any;
  timeBox2: any;
  currentYear: any;
  keyNewYearKey: string;
  paskhalia: any;
  paskhalia2: any;
  datesEasterYear: object;
  
  /**
 * Вычисление разницы времен, 
 * которая показывает состояние Праздника Новый год в текущем ПАСХАЛЬНОМ ГОДУ.
 * 
 * читай README
*/
  dateDeference: number;
    this: any;


  constructor(public _xxxService: XxxService) {



  }
  /**
   * @param {data}
   */
  ngOnInit() {

    this._xxxService.getPaskhaliaFromJSON().subscribe(data => this.paskhalia = data);
    this.paskhalia2 = this._xxxService.paskhaliaArray();




    // spr1 (spravka 1 http://localhost:4200/spr)
    this.timeBox = new Date();

    // prb1 (problema 1, смотри видео prb-1.mov)
    this.currentYear = this.timeBox.getFullYear();
    this.paskhaCurrentYear = new Date(this.currentYear, this.paskhalia2[this.currentYear][0], this.paskhalia2[this.currentYear][1]);
    console.log(this.paskhaCurrentYear, "Пасха в этом году");


    this.dateDeference = this.paskhaCurrentYear - this.timeBox;



    if (this.dateDeference < 0) {

      // ---------------------------
      // если НГ не был в Пасхальном году
      this.keyYear = (this.timeBox.getFullYear()) + 1;
      // ---------------------------
      this.keyNewYear(this.keyYear);
      this.keyNewYearKey = "0";
    }

    else {

      // ---------------------------
      // если НГ был в текущем Пасхальном году
      this.keyYear = (this.timeBox.getFullYear());
      this.keyNewYearKey = "1";
      // ---------------------------
      this.keyNewYear(this.keyYear);
    }

  }

  /**
   *  функция, которая в зависимости от входящего ключа-нгода формирует две даты Пасх
   */
  keyNewYear(keyYear: number) {
    console.log(keyYear, " -- keyYear");

    this.lastEaster = this.paskhalia2[this.keyYear - 1][1] + " " + this._xxxService.monthsArray[this.paskhalia2[this.keyYear][0]];

    var lP = new Date(this.keyYear - 1, this.paskhalia2[this.keyYear - 1][0], this.paskhalia2[this.keyYear - 1][1]).getTime();
    console.log(lP);

    this.nextEaster = (this.paskhalia2[this.keyYear][1]) + " " + (this._xxxService.monthsArray[this.paskhalia2[this.keyYear][0]]);

    var nP = new Date(this.keyYear, this.paskhalia2[this.keyYear][0], this.paskhalia2[this.keyYear][1]).getTime();
    console.log(nP);

    this.datesEasterYear =

      {
        lastEaster: lP,
        nextEaster: nP
      },
      // [

      //   [this.keyYear-1, this.paskhalia2[this.keyYear - 1][0],
      //   this.paskhalia2[this.keyYear - 1][1]
      // ],
      // [this.keyYear, 
      //   this.paskhalia2[this.keyYear][0],
      //   this.paskhalia2[this.keyYear][1]
      // ]


      console.log(this.datesEasterYear);


  }



}


