import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Easter } from '../intrfc/interfaces';


@Injectable({
  providedIn: 'root'
})



export class DateService implements OnInit, Easter {

keyYear: number; // Главный ключ
timeBox: Date;
paskhaCurrentYear: Date;
currentYear: number;
keyNewYearKey: string;
paskhalia2: object;
datesEasterYear: any;
  /**
    * Вычисление разницы времен,
    * которая показывает состояние Праздника Новый год в текущем ПАСХАЛЬНОМ ГОДУ.
    *
    * читай README
   */
  dateDeference: number;

 /**
   * Readonly для свойств и допускает инициализацию только в первый раз.
   */
  readonly paskhalia = {

    2015: [3, 12], 2016: [4, 1], 2017: [3, 16], 2018: [3, 8], 2019: [3, 28], 2020: [3, 19], 2021: [4, 2], 2022: [3, 24], 2023: [3, 16], 2024: [4, 5], 2025: [3, 20], 2026: [3, 12], 2027: [4, 2], 2028: [3, 16], 2029: [3, 8], 2030: [3, 28], 2031: [3, 13], 2032: [4, 2], 2033: [3, 24], 2034: [3, 9], 2035: [3, 29], 2036: [3, 20], 2037: [3, 5], 2038: [3, 25]
  };

    /** 
   *  Массив для конвертации месяцев в русский язык
*/
  monthsArray: string[] = [
    "января", "февраля", "марта", "апреля", "май", "июня", "июля",
    "август", "сентября", "октября", "ноября", "декабря"
  ]



    /**
     * Коструктор использует HttpClient так как нужно подключаться к внешнему источнику – файлу paskhalia.json
     * @param http 
     * свойство для работы с протоколом http
     */
  constructor(private http: HttpClient) {
    this.paskhalia2 = this.paskhalia;
    // this.paskhalia = this.getPaskhaliaFromJSON().subscribe(data => this.paskhalia = data); // инициализация переменной paskhalia значениями из файла paskhalia.json 
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
  ngOnInit() {

    
  }
     /**
     *  функция, которая в зависимости от входящего ключа-нгода формирует две даты Пасх
     */
  keyNewYear(keyYear: number) {
    console.log(keyYear, " -- keyYear");
    
    // объект для экспортирования в другой компонент
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
  
/**
 * Метод возвращающий Пасхалию из json файла
 */
  public getPaskhaliaFromJSON(){
    // Возвращает Пасхалию
    return this.http.get<any>('./assets/paskhalia.json');
    
  }
  

  paskhaliaArray() {
    return this.paskhalia
  }



// --

}
