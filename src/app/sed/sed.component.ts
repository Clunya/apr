import { Component, Input, OnInit } from '@angular/core';
import { XxxService } from '../xxx.service';

// компонент вычисленияс седмиц всего Пасхального года

@Component({
  selector: 'app-sed',
  templateUrl: './sed.component.html',
  styleUrls: ['./sed.component.css']
})
export class SedComponent implements OnInit {
  
  @Input() datesEasterYear: object;

  // ??? вычисление седмиц Бгода 
  sedmica: number;
  // timebox1: number; timebox2: number;
  

  constructor(public _xxxService: XxxService) {
  }
  ngOnInit() {
    
    this.sedmica = (Math.trunc(( this.datesEasterYear.nextEaster - this.datesEasterYear.lastEaster) / 864E5 / 7)) + 1;
    console.log("Кол-во седмиц в Пгоду ", this.sedmica);

    // ??? добавить описание в SPR

  }
  

  // spr3 --- получить значения переменных lastEaster и  nextEaster
  // выичслить количество седмиц бгода

  /* 
    Вычисление разницы между текущем временем
    и датой прошедшей Пасхи. Обрезка значения до целого.
    ----------------------------------------------------
*/

  // sedmica() {
    

  // }
  
  

}
