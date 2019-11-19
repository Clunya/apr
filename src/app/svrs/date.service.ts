import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Easter } from '../intrfc/interfaces';

/**
  * Православная Пасхалия.
  */
 const PASKHALIA = {

   2015: [3, 12], 2016: [4, 1], 2017: [3, 16], 2018: [3, 8],  2019: [3, 28], 2020: [3, 19], 2021: [4, 2], 2022: [3, 24], 2023: [3, 16], 2024: [4, 5], 2025: [3, 20], 2026: [3, 12], 2027: [4, 2], 2028: [3, 16], 2029: [3, 8], 2030: [3, 28], 2031: [3, 13], 2032: [4, 2], 2033: [3, 24], 2034: [3, 9], 2035: [3, 29], 2036: [3, 20], 2037: [3, 5], 2038: [3, 25]

 };

@Injectable({
  providedIn: 'root'
})



export class DateService implements OnInit, Easter {

  keyYear: number; // Главный ключ
  timeBox: Date;
  paskhaCurrentYear: Date;
  currentYear: number;
  keyNewYearKey: string;
  paskhaliaJSON: object;
  datesEasterYear: any;


  /**
    * Вычисление разницы времен,
    * которая показывает состояние Праздника Новый год в текущем ПАСХАЛЬНОМ ГОДУ.
    *
    * читай README
   */
  dateDeference: number;

    /** 
   *  Массив для конвертации месяцев в русский язык
*/
  monthsRU = [
    "января", "февраля", "марта", "апреля", "мая", "июня", "июля",
    "августа", "сентября", "октября", "ноября", "декабря"
  ]

  PASKHALIAJSON2: any;
    /**
     * Пока не используется !!!
     * Коструктор использует HttpClient так как нужно подключаться к внешнему источнику – файлу paskhalia.json
     * @param http 
     * свойство для работы с протоколом http
     */
  constructor(private http: HttpClient) {

    this.paskhaliaJSON = PASKHALIA;
    // this.PASKHALIAJSON2 = this.getPaskhaliaFromJSON().subscribe(data => this.PASKHALIAJSON2 = data); // инициализация переменной paskhalia значениями из файла paskhalia.json 
    this.timeBox = new Date();
    this.currentYear = this.timeBox.getFullYear();
    this.paskhaCurrentYear = new Date(this.currentYear, PASKHALIA[this.currentYear][0], PASKHALIA[this.currentYear][1]);
    // prb1 (problema 1, смотри видео prb-1.mov)
    this.dateDeference = this.paskhaCurrentYear.getTime() -this.timeBox.getTime();
        if (this.dateDeference < 0){
          // ---------------------------
          // если НГ не был в текущем Пасхальном году
          this.keyYear = this.currentYear + 1;
          // ---------------------------
          this.keyNewYear(this.keyYear);
          this.keyNewYearKey = "0";
        }
        else {
          // ---------------------------
          // если НГ был в текущем Пасхальном году
          this.keyYear = this.currentYear;
          this.keyNewYearKey = "1";
          // ---------------------------
          this.keyNewYear(this.keyYear);
        }
  }

  ngOnInit() {

  }

<<<<<<< HEAD
     /**
     *  функция, которая в зависимости от входящего ключа-нгода формирует две даты Пасх в миллисекундах 
     * и их русский формат для чтения
     */
  keyNewYear(keyYear: number) {

=======
     /** 007.md
     * Функция, которая в зависимости от входящего ключа-года формирует две даты Пасх.
     * @param {number} per – номер текущего года
     */
  keyNewYear(per: number) {
    console.log(per, " -- keyYear");
    
>>>>>>> 219b1dc689e03e233f8b9a1c09da050fbdce9245
    // объект для экспортирования в другой компонент
    /**
     * Колекция содержит две даты Пасх (last and next)
     */
    this.datesEasterYear =
<<<<<<< HEAD
      {

        "lastEaster":
          new Date(this.keyYear - 1, PASKHALIA[this.keyYear - 1][0],
            PASKHALIA[this.keyYear - 1][1]).getTime(),

        "lastEasterRU": PASKHALIA[this.keyYear - 1][1]+" "+
        this.monthsRU[PASKHALIA[this.keyYear - 1][0]], // +" "+ (this.keyYear-1),

        "nextEaster":
          new Date(this.keyYear, PASKHALIA[this.keyYear][0],
            PASKHALIA[this.keyYear][1]).getTime(),

        "nextEasterRU":   PASKHALIA[this.keyYear][1]+" "+
          this.monthsRU[PASKHALIA[this.keyYear][0]] +" "+ (this.keyYear)
        
      }


    // return console.log(typeof(this.datesEasterYear.nextEaster));
=======
    {
      "lastEaster":
      new Date(this.keyYear - 1, PASKHALIA[this.keyYear - 1][0],
        PASKHALIA[this.keyYear -1][1]).getTime(),
        // возращает тип number в миллисекундах
        "nextEaster":
        new Date(this.keyYear, PASKHALIA[this.keyYear][0],
          PASKHALIA[this.keyYear][1]).getTime()
    }
>>>>>>> 219b1dc689e03e233f8b9a1c09da050fbdce9245

  }
  
/**
 * Метод возвращающий Пасхалию из json файла
 */
  public getPaskhaliaFromJSON(){
    // Возвращает Пасхалию
    return this.http.get<any>('./assets/paskhalia.json');
    
  }
  

  getPaskhaliaArray() {
    return PASKHALIA
  }

  

// --

}
