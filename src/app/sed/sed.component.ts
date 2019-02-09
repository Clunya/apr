import { Component, Input, OnInit } from '@angular/core';
import { XxxService } from '../xxx.service';

@Component({
  selector: 'app-sed',
  templateUrl: './sed.component.html',
  styleUrls: ['./sed.component.css']
})

/*
* ## КЛАСС ВЫЧИСЛЕНИЯ СЕДМИЦ ДЛЯ ВСЕГО ПАСХАЛЬНОГО ГОДА С УЧЕТОМ ОСТСТУПОК ПО СОВРЕМЕННОМУ ГРИГОРИАНСКОМУ КАЛЕНДАРЮ.
*/
export class SedComponent implements OnInit {

  @Input()
  datesEasterYear: any;
  monthArray: string[];

  /** 
   * вычисление количества седмиц Богослужебного года 
  */
  sumWeeks: number;

  /**
   * Текущая седмица по Пасхе
   */
  currentWeek: number;

  /**
   * Cедмица по Пятидесятнице
   */
  weekAfterPyatidesyatnica: number;
  glas: string;

  timeBoxVozdvijjenie: number;
  sumWeeksAfterVozdvijjenie: number;
  timeBox: number = new Date().getTime();
  numberVozdvijjenie: number;

  /**
   * Дата текущей Пасхи для формирования даты Воздвижения из милисекунд
   */
  yearLastEaster: Date;

  /**
   * Дата грядущей Пасхи для формирования даты Недели Мытаря и Фарисея из милисекунд
   */
  yearNextEaster: Date;


  otstupkaV: number;
  prestupkaV: number;

  mif: Date;

  /**
   * Количество промежуточных седмиц пред Неделей Мытаря и Фарисея, если таковые случились
   */
  betweenWeeks: number;

  /**
   * Конвертированная дата
   */
  mifRussianDate?: string;

  /**
   * CSS седмицы 
   */
  sedStyle: object = { "color": "#e3423477", "font-weight": "bold" };


  public constructor(public _xxxService: XxxService) {

  }
  ngOnInit() {
    this.yearNextEaster = new Date(this.datesEasterYear.nextEaster)
    this.numberOfWeeks();
    this.otstupkaVozdvijjenie();
    this.seedPyatidesyatnica();
    this.promWeeks();

  }

  /**
    * Вычисление `разницы` между текущем временем и датой прошедшей Пасхи.
    * Обрезка значения до целого.
    * Вычисление текущей седмицы.
    * Вычисление седмицы по Пятьдесятнице
*/
  private numberOfWeeks() {
    this.sumWeeks = (Math.trunc((this.datesEasterYear.nextEaster - this.datesEasterYear.lastEaster) / 864E5 / 7));
    this.currentWeek = (Math.trunc((Date.now() - this.datesEasterYear.lastEaster) / 864E5 / 7 + 1));
    this.weekAfterPyatidesyatnica = this.sumWeeks - 7;

    // вычисление даты и количества промежуточных седмиц
    if (this.vg()) {
      this.mif = new Date(this.datesEasterYear.nextEaster - 6047999999 + 86400000);

      this.mifRussianDate = String(this.mif.getDay() + this._xxxService.monthsArray[this.mif.getMonth()]);

      console.log("Это дата для високосного года", this.mif);
    }
    else {
      this.mif = new Date(this.datesEasterYear.nextEaster - 6047999999);
      this.mifRussianDate = this.mif.getDate() + " " + this._xxxService.monthsArray[this.mif.getMonth()];
    }

    console.log("Дата Мытаря и Фарисея", this.mif.toDateString());
    console.log("Кол-во седмиц в Пасхальном году (между Пасхами): ", this.sumWeeks);
  }

  /**
   * Возвращает кол-во седмиц отступпки или преступки для праздника Воздвижения Креста.
   */
  private otstupkaVozdvijjenie() {
    this.yearLastEaster = new Date(this.datesEasterYear.lastEaster);
    this.numberVozdvijjenie = this.yearLastEaster.getFullYear();
    this.timeBoxVozdvijjenie = new Date(this.numberVozdvijjenie, 8, 27).getTime();
    this.sumWeeksAfterVozdvijjenie = (Math.trunc((this.timeBoxVozdvijjenie - this.datesEasterYear.lastEaster) / 864E5 / 7) - 6);
    console.log("Количество седмиц от Пасхи до Воздвижения Креста: ", this.sumWeeksAfterVozdvijjenie);


    this.otstupkaV = this.sumWeeksAfterVozdvijjenie - 17;
    this.prestupkaV = this.sumWeeks;

    /**
     * В данном операторе `if` проверяется было ли Воздвижение и превышает ли кол-во седмиц число 17. Если да, то возвращается разность (otstupkaV), на которую больше прошло седмиц.
     * 
     */
    if (this.timeBox >= this.timeBoxVozdvijjenie && this.sumWeeks > this.sumWeeksAfterVozdvijjenie && this.sumWeeks > 17) {
      return ("Отступка по Воздвижении в седмицах: " + this.otstupkaV);
    }

    /**
     * В данном `if` возвращается нехватка до семьнадцати седмиц если праздник Воздвижения случился ранее 17 седмицы после Пасхи.
     * 
     */
    else if (this.timeBox >= this.timeBoxVozdvijjenie && this.sumWeeks < this.sumWeeksAfterVozdvijjenie && this.sumWeeks > 17) {
      var clog = 'Преступка ' + this.prestupkaV
      return (clog);

    }

    else return "!!! ВОЗДВИЖЕНИЯ В ТЕКУЩЕМ БОГОСЛУЖЕБНОМ ГОДУ ЕЩЕ НЕ БЫЛО !!! ";

  }
  /**
   * Возвращает глас Октоиха по номеру седмицы случившейся после Пасхи, но не по Пятьдесятнице.
   *  
   * @param {string} sedmica принимает строку
   * @returns возвращает номер гласа для текущей седмицы
   */
  private glasSed(sedmica: string | number) {

    let glasSedmic = {
      "1": 8, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7,
      "9": 8, "10": 1, "11": 2, "12": 3, "13": 4, "14": 5, "15": 6, "16": 7,
      "17": 8, "18": 1, "19": 2, "20": 3, "21": 4, "22": 5, "23": 6, "24": 7,
      "25": 8, "26": 1, "27": 2, "28": 3, "29": 4, "30": 5, "31": 6, "32": 7,
      "33": 8, "34": 1, "35": 2, "36": 3, "37": 4, "38": 5, "39": 6, "40": 7,
      "41": 8, "42": 1, "43": 2, "44": 3, "45": 4, "46": 5, "47": 6, "48": 7,
      "49": 8, "50": 1, "51": 2, "52": 3, "53": 4, "54": 5, "55": 6, "56": 7,
      "57": 8, "58": 1, "59": 2, "60": 3, "61": 4, "62": 5, "63": 6, "64": 7,
      "65": 8,

    }

    if (sedmica) {
      return String(glasSedmic[sedmica]);
    }

    else return "невнятный";
  }

  /**
   * Вычисляет седмицу по Пятьдесятнице и глас седмицы
   */
  private seedPyatidesyatnica() {
    if (this.weekAfterPyatidesyatnica < 7) {

      this.glas = String(this.currentWeek);

    }
    else {

      this.glas = this.glasSed(String(this.currentWeek));
      this.weekAfterPyatidesyatnica = this.currentWeek - 7;

      // document.getElementById("date3").className += "PlusUngles";
      // document.getElementById("date3").innerHTML = sedmicaPyatidesyatnici;
      // document.getElementById("date4").className += "blockOFF";
    }
  }

  /**
   * Проверяет гражданский год грядущей Пасхи на високосность
   */
  protected vg() {
    var year = this.yearNextEaster.getFullYear();
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  /**
   * Вычисляет промежуточные седмицы пред Неделей Мытаря и Фарисея
   */
  private promWeeks() {
    this.betweenWeeks = this.sumWeeks - 17 - 34;
    console.log("Промежуточных седмиц: ", this.betweenWeeks);

  }
}

// С седмицами окончено.
// Продолжение в расширении класса
