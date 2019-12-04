import { Injectable } from '@angular/core';
import { SedService } from './sed.service';

@Injectable({
  providedIn: 'root'
})
  
  
export class LinksService {

  /** 001.
   * Переменная удерживает html-ссылку на Главную страницу дня. Далее ссылка парсится компонентом.
   */
  linkToPageOfTheDay: string;

  /** 002.
   * Переменная удерживает html-ссылку на страницу чтения Апракоса.
   */
  linkTheApracosDay: string;


  /**
   *  число текущего дня.
  */
  td: number;
  gd: string; // для приведения в строку числа с начальным нолем – 01

  /**
   * Ссылка на #id страницы `stvol.html`.
   */
  idLink: string;


  constructor(public _sedSevice: SedService) {


    this.pathToPageDay();
    this.pathToPageApracosDay();
    this.idLinksToSed();

  }


  /**
      * Функция инициализирует переменную `linkToPageOfTheDay` ссылкой на страницу дня, в соответствии с Минеей (Сий день).
      */
  pathToPageDay() {

    let months = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC');
    // дней в месяцах
    let notVisokos = new Array('31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');
    // високос
    let visokos = new Array('31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');


      let d = new Date
      this.td = d.getDate();
  
      //-=-=-=-=-=-=-=-=-=-=-
      console.warn(this.td)
      //-=-=-=-=-=-=-=-=-=-=-

      if (this.td < 10) {
        this.gd = "0" + this.td;
      } else {
        this.gd = String(this.td)
      }

      let tm = d.getMonth();
      let ty = d.getFullYear();
      let visekt = ((ty % 4) == 0) ? visokos : notVisokos;
  
      if (tm == 0 && this.td <= 13) {
        var mm = 11;
        var ss = Number(visekt[mm]) - (13 - this.td);
      } else if (tm > 0 && this.td <= 13) {
        mm = tm - 1;
        ss = Number(visekt[mm]) - (13 - this.td);
      } else {
        mm = tm;
        ss = (this.td - 13);
      }
  
      if (ss < 10) { var dd = '0' + ss; } else { dd = String(ss); }
  
      this.linkToPageOfTheDay = (months[mm] + "/" + dd + this.CorrectingMonthNumbersDay( months[mm], this.gd) + "/" + "index.html");

    }
  
    
    /** 009.
     * Функция инициализирует переменную `pathToPageApracosDay`.
     * 
     * @var correctingLinkToReadAprakos корректировка ссылки на чтение Апракоса с учетом всех отступок и преступок по Пасхе.
     */
  pathToPageApracosDay() {

    var correctingLinkToReadAprakos = this._sedSevice.currentWeek > 40 ? this._sedSevice.betweenWeeks : 0
    
    this.linkTheApracosDay = ("../APRACOS/" + (this._sedSevice.currentWeek - correctingLinkToReadAprakos) + "/" + (this._sedSevice._datesService.timeBox.getDay() + 1) + ".html")
    
    }
  
  /**
   * Функция инициализирует переменную `idLink` ссылкой на странице `stvol.html`.
   * Ссылка (#id) на текущую седмицу текущей страницы БЕЗ УЧЕТА отступок и преступок.
   */
  idLinksToSed() {
    this.idLink = ("#seed" + this._sedSevice.currentWeek)
  }
  
  /** 005.
   * Функция увеличивает Юлианскую дату в високосном году, в дапазоне от 29 февраля до 16 марта на единицу.
   * 
   * @param month принимает один из двух месяцев (Февраль или Март).
   * @param gd принимает Юлианскую дату.
   * @return Юлианскую дату.
   */
  CorrectingMonthNumbersDay(month: String, gd: String ): String {
    let n = Number(gd)

    if ( month === "FEB" && n === 29  ) {
      return "01"
    }
    if (n < 16 && month === "MAR") {

      if (n < 10) {
        
        return "0" + (n + 1)
        
      } else {

        return String(n + 1)
        
      }
      
    }
    
    return gd

  }
}
