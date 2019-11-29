import { Injectable } from '@angular/core';
import { SedService } from './sed.service';

@Injectable({
  providedIn: 'root'
})
  
  
export class LinksService {

  /**
   * Ссылка на текущий день Минеи (Сий день)
   */
  linkToPageOfTheDay: string;

  /**
   * Ссылка на текущие чтения Апракоса (Апрáкосъ)
   */
  linkTheApracosDay: string;

  /**
   *  число текущего дня
  */ 
  td: number;

  /**
   * Ссылка на #id страницы stvol.html
   */
  idLink: string;

  constructor(public _sedSevice: SedService) {


    this.pathToPageDay();
    this.pathToPageApracosDay();
    this.idLinksToSed();

   }


 /**
     * Функция инициализирует переменную linkToPageOfTheDay ссылкой на страницу дня, в соответствии с Минеей (Сий день)
     */
    pathToPageDay() {

      let mn = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC');
      // дней в месяцах
      let mnn = new Array('31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');
      // високос
      let mnl = new Array('31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');
  
      let d = new Date();
      this.td = d.getDate();
      if (this.td < 10) {
        this.td = Number("0" + this.td);
      }
      let tm = d.getMonth();
      let ty = d.getFullYear();
      let marr = ((ty % 4) == 0) ? mnl : mnn;
  
      if (tm == 0 && this.td <= 13) {
        var mm = 11;
        var ss = Number(marr[mm]) - (13 - this.td);
      } else if (tm > 0 && this.td <= 13) {
        mm = tm - 1;
        ss = Number(marr[mm]) - (13 - this.td);
      } else {
        mm = tm;
        ss = (this.td - 13);
      }
  
      if (ss < 10) { var dd = '0' + ss; } else { dd = String(ss); }
  
      this.linkToPageOfTheDay = (mn[mm] + "/" + dd + this.td + "/" + "index.html");
      // console.log(this.linkToPageOfTheDay);
  
      //  перенаправление на директорию текущего дня
      // location.replace(mn[mm] + "/" + dd + this.td + "/" + "index.html");
    }
  
    
  
      /**
       * Функция инициализирует переменную pathToPageApracosDay
       * 
       */
  
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  
    // STOP:START date: 30/11/2019, time: 22:45
    // note: в этой функции требуется код генерации ссылки для перехода на страницу Апракоса С УЧЕТОМ всех преступок и промежуточных седмиц.
  
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    pathToPageApracosDay() {
      this.linkTheApracosDay = ("../APRACOS/" + this._sedSevice.currentWeek + "/" + (this._sedSevice._datesService.timeBox.getDay()+1) + ".html")
    }
  
  /**
   * Функция инициализирует переменную `idLink` ссылкой на странице stvol.html.
   * Ссылка ведет на текущую седмицу БЕЗ УЧЕТА отступок и преступок.
   */
  
  idLinksToSed() {
    this.idLink = ("#seed" + this._sedSevice.currentWeek)
    }
}

