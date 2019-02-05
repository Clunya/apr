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
  sumWeaks: number;

/**
 * Текущая седмица по Пасхе
 */
  currentWeak: number;

  /**
   * Cедмица по Пятидесятнице
   */
  weakAfterPyatidesyatnica: number;
  glas: string;

  timeBoxVozdvijjenie: number;
  sumWeaksAfterVozdvijjenie: number;
  timeBox: number = new Date().getTime();
  numberVozdvijjenie: number;

  /**
   * Конвертирует дату текущей Пасхи для формирования даты Воздвижения из милисекунд
   */
  yearLastEaster: Date;
  otstupkaV: number;
  prestupkaV: number;



  constructor(public _xxxService: XxxService) {
  }
  ngOnInit() {

    this.numberOfWeaks();
    console.log(this.otstupkaVozdvijjenie());
    this.seedPyatidesyatnica();
    // this.glasSed(String(this.allWeaks))
    console.log(this.glas);
    

  }

  /** 
    * Вычисление `разницы` между текущем временем и датой прошедшей Пасхи. Обрезка значения до целого.
    * Вычисление текущей седмицы
    * Вычисление седмицы по Пятьдесятницы
*/
  private numberOfWeaks() {
    this.sumWeaks = (Math.trunc((this.datesEasterYear.nextEaster - this.datesEasterYear.lastEaster) / 864E5 / 7));
    this.currentWeak = (Math.trunc((Date.now() - this.datesEasterYear.lastEaster) / 864E5 / 7) +1);
    this.weakAfterPyatidesyatnica = this.sumWeaks - 7 ;

    console.log("Кол-во седмиц в Пасхальном году (между Пасхами): %d", this.sumWeaks);
  }

  

  /**
   * Метод возвращает кол-во седмиц отступпки или преступки по празднике Воздвижения.
   */
  private otstupkaVozdvijjenie() {
    this.yearLastEaster = new Date(this.datesEasterYear.lastEaster);
    this.numberVozdvijjenie = this.yearLastEaster.getFullYear();
    this.timeBoxVozdvijjenie = new Date(this.numberVozdvijjenie, 8, 27).getTime();
    this.sumWeaksAfterVozdvijjenie = (Math.trunc((this.timeBoxVozdvijjenie - this.datesEasterYear.lastEaster) / 864E5 / 7) - 6);
    console.log("Количество седмиц от Пасхи до Воздвижения Креста: %d", this.sumWeaksAfterVozdvijjenie);

    /**
     * 
     */
     this.otstupkaV = this.sumWeaksAfterVozdvijjenie - 17;
     this.prestupkaV = this.sumWeaks;

  /**
   * В данном ифе проверяется было ли Воздвижение и превышает ли кол-во седмиц число 17. Если да, то возвращается разность (otstupkaV), на которую больше прошло седмиц.
   * 
   */
    if (this.timeBox >= this.timeBoxVozdvijjenie && this.sumWeaks > this.sumWeaksAfterVozdvijjenie && this.sumWeaks > 17) {
      return ("Отступка по Воздвижении в седмицах: " + this.otstupkaV);
    }

/**
 * В данном ифе возвращается нехватка семнадцати седмиц если праздник Воздвижения случился ранее 17 седмицы после Пасхи.
 * 
 */
    else if (this.timeBox >= this.timeBoxVozdvijjenie && this.sumWeaks < this.sumWeaksAfterVozdvijjenie && this.sumWeaks > 17) {
      var clog = ('Преступка %d' + this.prestupkaV)
      return (clog) ;

        // console.log(prestupkaV + this.timeBoxVozdvijjenie + "\n Воздвиженье еще будет на " + this.allWeaksVozdvijjenie + " седмице: " + this.timeBoxVozdvijjenie);
    }

    else return "!!! ВОЗДВИЖЕНИЯ В ТЕКУЩЕМ БОГОСЛУЖЕБНОМ ГОДУ ЕЩЕ НЕ БЫЛО !!! ";

  }
/**
 * ## Определяет глас Октоиха по номеру седмицы случившейся после Пасхи, но не по Пятьдесятнице
 *  
 * @param {string} sedmica принимает строку
 * @returns возвращает номер гласа
 * @example 
 * первое
 * второе
 */
  private glasSed(sedmica: string | number) {

    var glasSedmici = {
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
      
      console.warn("sssss",sedmica);
      return String(glasSedmici[sedmica]);
    }
    else return "невнятный";
}


  private seedPyatidesyatnica() {
    if (this.weakAfterPyatidesyatnica < 7) {
  
      this.glas = String(this.currentWeak);

    }
    else {

        this.glas = this.glasSed(String(this.currentWeak));
        this.weakAfterPyatidesyatnica = this.currentWeak - 7;

        // document.getElementById("date3").className += "PlusUngles";
        // document.getElementById("date3").innerHTML = sedmicaPyatidesyatnici;
        // document.getElementById("date4").className += "blockOFF";
    }
}
  
}

