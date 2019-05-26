import { Injectable } from '@angular/core';
import { DateService } from './date.service';
import { OnInit } from '@angular/core';

/**
 * Набор гласов для седмиц
 */
const GLASSEDMIC = {
  "1": 8, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7,
  "9": 8, "10": 1, "11": 2, "12": 3, "13": 4, "14": 5, "15": 6, "16": 7,
  "17": 8, "18": 1, "19": 2, "20": 3, "21": 4, "22": 5, "23": 6, "24": 7,
  "25": 8, "26": 1, "27": 2, "28": 3, "29": 4, "30": 5, "31": 6, "32": 7,
  "33": 8, "34": 1, "35": 2, "36": 3, "37": 4, "38": 5, "39": 6, "40": 7,
  "41": 8, "42": 1, "43": 2, "44": 3, "45": 4, "46": 5, "47": 6, "48": 7,
  "49": 8, "50": 1, "51": 2, "52": 3, "53": 4, "54": 5, "55": 6, "56": 7,
  "57": 8
}


@Injectable({
  providedIn: 'root'
})

export class SedService implements OnInit {


  /**
   * Темплейтная переменная принимающая значение из родительского компонента html-шаблона **datesEasterYear** 
   * 
   */
  datesEasterYear: any;
  /**
   * Темплейтная переменная принимающая значение из родительского компонента html-шаблона **keyNewYearKey** 
   * 
   */
  keyNewYearKey: number;

  /**
   * Массив строк который находится в _datesService по умолчанию
   * _переменную можно не прописывать_
   * 
   */
  monthsArray: string[];

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
  timeBox = new Date().getTime();
  numberVozdvijjenie: number;

  /**
   * Дата текущей Пасхи для формирования даты Воздвижения из милисекунд
   */
  yearLastEaster: Date;

  /**
   * Дата грядущей Пасхи для формирования даты Недели Мытаря и Фарисея из милисекунд
   */
  yearNextEaster: Date;

  /**
   * Переменные для значений отступки и преступки в чтениях
   * Указывают сдвиг от празднества Воздвижения в обе стороны
   */
  otstupkaV: number;
  prestupkaV: number;

  /**
   * Переменная для даты Недели Мытаря и Фарисея
   */
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
   * Високосный год
   */
  v_year: boolean;

  /**
   * Переменная для вывода русского слова в шаблоне html (преступка или отступка)
   */
  stupka: string;


  public constructor(public _datesService: DateService) {

    this.numberOfWeeks();
    this.yearNextEaster = new Date(this._datesService.datesEasterYear.nextEaster);
    this.v_year = this.vg();
    this.otstupkaVozdvijjenie();
    this.promWeeks();
    
  }
  
  /**
   * Стартовая инициализация объектов значениями дат
   */
  ngOnInit() {

  }

  /**
    * Вычисление `разницы` между текущем временем и датой прошедшей Пасхи.
    * 864E5 - экспонента (кол-во миллисекунд в сутках) = 86.400.000
    * Обрезка значения до целого.
    * Вычисление текущей седмицы.
    * Вычисление седмицы по Пятьдесятнице
*/
  numberOfWeeks() {
    this.sumWeeks = (Math.trunc((this._datesService.datesEasterYear.nextEaster - this._datesService.datesEasterYear.lastEaster) / 864E5 / 7));
    this.currentWeek = (Math.trunc((Date.now() - this._datesService.datesEasterYear.lastEaster) / 864E5 / 7 + 1));

    if (this.sumWeeks === 8) {
      this.weekAfterPyatidesyatnica = this.sumWeeks - 7;
      this.glas = this.glasSed(String(this.currentWeek));
    }
    else {
      this.weekAfterPyatidesyatnica = null;
      this.glas = this.glasSed(String(this.currentWeek));
    }

    /**
     *  вычисление даты Мытаря и Фарисея и количества промежуточных седмиц
     */
    if (this.v_year) // читай README.md 001 
    {
      this.mif = new Date(this._datesService.datesEasterYear.nextEaster - 6047999999 + 86400000);
      console.log("Дата Мытаря и Фарисея", this.mif);

      this.mifRussianDate = String(this.mif.getDay() + this._datesService.monthsArray[this.mif.getMonth()]);
      console.log("Это дата для високосного года", this.mif);
    }
    else {
      this.mif = new Date(this._datesService.datesEasterYear.nextEaster - 6047999999);
      this.mifRussianDate = this.mif.getDate() + " " + this._datesService.monthsArray[this.mif.getMonth()];
      console.log("Дата Мытаря и Фарисея", this.mif);

    }

    console.log("Текущая седмица", this.currentWeek);
    console.log("Дата Мытаря и Фарисея", this.mif.toDateString());
    console.log("Кол-во седмиц в Пасхальном году (между Пасхами): ", this.sumWeeks);
  }

  /**
   * Возвращает кол-во седмиц отступпки или преступки для праздника Воздвижения Креста.
   */
  private otstupkaVozdvijjenie() {
    this.yearLastEaster = new Date(this._datesService.datesEasterYear.lastEaster);
    this.numberVozdvijjenie = this.yearLastEaster.getFullYear();
    this.timeBoxVozdvijjenie = new Date(this.numberVozdvijjenie, 8, 27).getTime();
    this.sumWeeksAfterVozdvijjenie = (Math.trunc((this.timeBoxVozdvijjenie - this._datesService.datesEasterYear.lastEaster) / 864E5 / 7) - 6);
    console.log("Количество седмиц от Пасхи до Воздвижения Креста: ", this.sumWeeksAfterVozdvijjenie);

    if (this.sumWeeksAfterVozdvijjenie > 17) {
      this.otstupkaV = this.sumWeeksAfterVozdvijjenie - 17;
      this.stupka = "отступка"
    }
    else this.otstupkaV = 17 - this.sumWeeksAfterVozdvijjenie;
    this.stupka = "преступка"

    /**
     * В данном операторе `if` проверяется было ли Воздвижение и превышает ли кол-во седмиц число 17. Если да, то возвращается разность (otstupkaV), на которую больше прошло седмиц.
     * 
     */
    if (this.timeBox >= this.timeBoxVozdvijjenie && this.sumWeeks > this.sumWeeksAfterVozdvijjenie && this.sumWeeks > 17) {
      return ("Отступка по Воздвижении в седмицах: " + this.otstupkaV);
    }

    /**
     * В данном `if` возвращается нехватка до семнадцати седмиц если праздник Воздвижения случился ранее 17 седмицы после Пасхи.
     * 
     */
    else if (this.timeBox >= this.timeBoxVozdvijjenie && this.sumWeeks < this.sumWeeksAfterVozdvijjenie && this.sumWeeks > 17) {
      var clog = 'Преступка ' + this.prestupkaV
      return (clog);

    }

    else
      console.log("До Воздвижения осталось седмиц: ", (this.sumWeeksAfterVozdvijjenie - this.currentWeek));

  }
  
  /**
   * Возвращает глас Октоиха по номеру седмицы случившейся после Пасхи, но не по Пятьдесятнице.
   *  
   * @param {string} sedmica принимает строку
   * @returns возвращает номер гласа для текущей седмицы
   */
  protected glasSed(sedmica: string | number) {

    if (sedmica) {
      return String(GLASSEDMIC[sedmica]);
    }

    else return "невнятный 🙅‍ --";
  }


  /**
   * Проверяет гражданский год грядущей Пасхи на високосность
   */
  vg(): boolean {
    
    var year2 = this.yearNextEaster.getFullYear();
    return ((year2 % 4 == 0) && (year2 % 100 != 0)) || (year2 % 400 == 0);
    
    
  }

  /**
   * Вычисляет промежуточные седмицы пред Неделей Мытаря и Фарисея
   */
  private promWeeks() {
    this.betweenWeeks = this.sumWeeks - 17 - 34;
    console.log("Промежуточных седмиц: ", this.betweenWeeks);
  }

  r = 'Введите год';
}
