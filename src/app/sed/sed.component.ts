import { Component, Input, OnInit } from '@angular/core';
import { XxxService } from '../xxx.service';

/*
* компонент вычисления седмиц всего Пасхального года
*/

@Component({
  selector: 'app-sed',
  templateUrl: './sed.component.html',
  styleUrls: ['./sed.component.css']
})
export class SedComponent implements OnInit {

  @Input() datesEasterYear: any;

  /** 
   * вычисление количества седмиц Богослужебного года 
  */
  allWeaks: number;
  timeBoxVozdvijjenie: number;
  allWeaksVozdvijjenie: number;
  timeBox: number = new Date().getTime();
  numberVozdvijjenie: number;

  /**
   * Ковертирует дату текущей Пасхи для формирования даты Воздвижения
   */
  yearLastEaster: Date;
  otstupkaV: number;
  prestupkaV: number;


  constructor(public _xxxService: XxxService) {
  }
  ngOnInit() {

    this.numberOfWeaks();
    console.log(this.otstupkaVozdvijjenie());
    

  }

  /** 
    * Вычисление `разницы` между текущем временем и датой прошедшей Пасхи. Обрезка значения до целого.
    
*/
  private numberOfWeaks() {
    this.allWeaks = (Math.trunc((this.datesEasterYear.nextEaster - this.datesEasterYear.lastEaster) / 864E5 / 7));

    console.log("Кол-во седмиц в Пасхальном году (между Пасхами): %d", this.allWeaks);
  }

  

  /**
   * Метод возвращает кол-во седмиц отступпки или преступки по празднике Воздвижения.
   */
  private otstupkaVozdvijjenie() {
    this.yearLastEaster = new Date(this.datesEasterYear.lastEaster);
    this.numberVozdvijjenie = this.yearLastEaster.getFullYear();
    this.timeBoxVozdvijjenie = new Date(this.numberVozdvijjenie, 8, 27).getTime(); //  смотри spr4 [v]
    this.allWeaksVozdvijjenie = (Math.trunc((this.timeBoxVozdvijjenie - this.datesEasterYear.lastEaster) / 864E5 / 7) - 6);
    console.log("Количество седмиц от Пасхи до Воздвижения Креста: %d", this.allWeaksVozdvijjenie);

    /**
     * 
     */
     this.otstupkaV = this.allWeaksVozdvijjenie - 17;
     this.prestupkaV = this.allWeaks;

    // var norm = this.allWeaksVozdvijjenie + (17 - this.allWeaksVozdvijjenie);


  /**
   * В данном ифе проверяется было ли Воздвижение и превышает ли кол-во седмиц число 17. Если да, то возвращается разность (otstupkaV), на которую больше прошло седмиц.
   * 
   */
    if (this.timeBox >= this.timeBoxVozdvijjenie && this.allWeaks > this.allWeaksVozdvijjenie && this.allWeaks > 17) {
      return ("Отступка по Воздвижении в седмицах: " + this.otstupkaV);
    }

/**
 * В данном ифе возвращается нехватка семнадцати седмиц если праздник Воздвижения случился ранее 17 седмицы после Пасхи.
 * 
 */
    else if (this.timeBox >= this.timeBoxVozdvijjenie && this.allWeaks < this.allWeaksVozdvijjenie && this.allWeaks > 17) {
      var clog = ('Преступка %d' + this.prestupkaV)
      return (clog) ;

        // console.log(prestupkaV + this.timeBoxVozdvijjenie + "\n Воздвиженье еще будет на " + this.allWeaksVozdvijjenie + " седмице: " + this.timeBoxVozdvijjenie);
    }

    else return "!!! ВОЗДВИЖЕНИЯ В ТЕКУЩЕМ БОГОСЛУЖЕБНОМ ГОДУ ЕЩЕ НЕ БЫЛО !!! ";

  }
  
}
