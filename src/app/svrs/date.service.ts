import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Easter } from '../intrfc/interfaces';

/**
  * Православная Пасхалия.
  */
 const PASKHALIA = {

   2015: [3, 12], 2016: [4, 1], 2017: [3, 16], 2018: [3, 8],  2019: [3, 28], 2020: [3, 19], 2021: [4, 2], 2022: [3, 24], 2023: [3, 16], 2024: [4, 5], 2025: [3, 20], 2026: [3, 12], 2027: [4, 2], 2028: [3, 16], 2029: [3, 8], 2030: [3, 28], 2031: [3, 13], 2032: [4, 2], 2033: [3, 24], 2034: [3, 9], 2035: [3, 29], 2036: [3, 20], 2037: [3, 5], 2038: [3, 25]

 };


@Injectable()


export class DateService implements OnInit, Easter {
  
  /** 008.
   * 
   */
  keyYear: number; // Главный ключ полугодия
  
  timeBox: Date;
  paskhaCurrentYear: Date;
  currentYear: number;

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
 *
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
 
    this.timeBox = new Date();
    this.currentYear = this.timeBox.getFullYear();
    this.paskhaCurrentYear = new Date(this.currentYear, PASKHALIA[this.currentYear][0], PASKHALIA[this.currentYear][1]);
    
    // prb1 (problema 1, смотри видео prb-1.mov)
    this.dateDeference = this.paskhaCurrentYear.getTime() -this.timeBox.getTime();
        if (this.dateDeference < 0){
          // ---------------------------
          // если  ГНГ не наступил в текущем Пасхальном году
          this.keyYear = this.currentYear + 1;
          // ---------------------------
          this.keyNewYear();
          
        }
        else {
          // ---------------------------
          // если ГНГ наступил в текущем Пасхальном году
          this.keyYear = this.currentYear;
          
          // ---------------------------
          this.keyNewYear();
        }
  }

  ngOnInit() {
   
  }

     /** 007
     * Функция, которая в зависимости от ключа-гнгода `keyYear` устанавливает в коллекцию две даты Пасх.
     * 
     */
  keyNewYear() {
    
    this.datesEasterYear =
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
          this.monthsRU[PASKHALIA[this.keyYear][0]] + " " + (this.keyYear)
        
      }
  }
  
/**
 * Метод возвращающий Пасхалию из json файла
 */
  public getPaskhaliaFromJSON(){
    // Возвращает Пасхалию
    return this.http.get<any>('./assets/paskhalia.json')

    // подписка для компонета
    // .subscribe(paskhaliaJSON => this.paskhaliaJSON = paskhaliaJSON);
  }
  

  getPaskhaliaArray() {

    return PASKHALIA
  }



}
