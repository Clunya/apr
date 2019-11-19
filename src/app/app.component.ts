import { Component, OnInit } from '@angular/core';

/**
 * Директива @Component. В этой директиве описывается селектор, который является тэгом в теле которого будет прописано то, что указано в этом файле.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
* В данном классе реализуется метод ngOnInit. В методе ngOnInit  инициализируются всё необходимое до загрузки компонента дом. Следует прописать в этом  методе только самые **необходимые** данные.
 */
export class AppComponent implements OnInit {
  title = 'АПРАКОСЪ';
  mainPage: string = "Главная страница";
  public timeOut: string = "classOFF";

  /**
   * Ссылка на текущий день Минеи (Сий день)
   */
  linkToPageOfTheDay: string;

  /**
   * Ссылка на текущие чтения Апракоса (Апрáкосъ)
   */
  pageTheApracosDay: string;

  // текущий день
  td: number;

  constructor() { }
  ngOnInit() {

    // setTimeout(() => {this.timeOut = "classON"}, 3);
    
    this.pathToPageDay();
    this.pathToPageApracosDay();

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
     * TODO: тут требуется код генерации ссылки для перехода на страницу Апракоса с учетом преступок и промежуточных седмиц.
     */
  pathToPageApracosDay() {
    // location.replace("../APRACOS/" + sedmica + "/" + (d.getDay() + 1) + ".html")
  }

}
