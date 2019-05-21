/**
* Компонент вычисляющий прошедшую и грядущую Пасхи.
*
*/
import { Component, Injectable, OnInit } from '@angular/core';
import { DateService } from '../svrs/date.service';
import { Easter } from '../intrfc/interfaces';
import { LinksService } from '../svrs/links.service';


@Injectable()

@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css'],
  providers: [ // открывает доступ к сервисам данных
    DateService,
    LinksService
  ] 
})

export class PaskhaComponent implements OnInit, Easter {

  keyYear: number; // Главный ключ
  timeBox: Date;
  paskhaCurrentYear: Date;
  currentYear: number;
  keyNewYearKey: string;
  paskhalia: [];
  paskhalia2: object;
  datesEasterYear: any;

  /**
    * Вычисление разницы времен,
    * которая показывает состояние Праздника Новый год в текущем ПАСХАЛЬНОМ ГОДУ.
    *
    * читай README
   */
  dateDeference: number;

  constructor(public _dateService: DateService, public _linksService: LinksService) {

  }

  ngOnInit() {

    this._dateService.getPaskhaliaFromJSON().subscribe(data => this.paskhalia = data); // инициализация переменной paskhalia значениями из файла paskhalia.json 
    this.paskhalia2 = this._dateService.paskhaliaArray();
    this.timeBox = new Date();
    // nrb1 (problema 1, смотри видео prb-1.mov)
    this.currentYear = this.timeBox.getFullYear();
    this.paskhaCurrentYear = new Date(this.currentYear, this.paskhalia2[this.currentYear][0], this.paskhalia2[this.currentYear][1]);
    console.log("Пасха в этом году", this.paskhaCurrentYear);
    this.dateDeference = this.paskhaCurrentYear.getTime() - this.timeBox.getTime();

    if (this.dateDeference < 0) {
      // ---------------------------
      // если НГ не был в текущем Пасхальном году
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
    
    // объект для импортирования в другой компонент
    this.datesEasterYear =
    {
      "lastEaster":
      new Date(this.keyYear - 1, this.paskhalia2[this.keyYear - 1][0],
        this.paskhalia2[this.keyYear - 1][1]).getTime(),
        // возращаает ти number
        "nextEaster":
        new Date(this.keyYear, this.paskhalia2[this.keyYear][0],
          this.paskhalia2[this.keyYear][1]).getTime()
    }
    
    
    // return console.log(typeof(this.datesEasterYear.nextEaster));
    
  }
  


}
