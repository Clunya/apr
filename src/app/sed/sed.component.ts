import { Component, OnInit, Input, Injectable } from '@angular/core';
import { SedService } from '../svrs/sed.service';


@Component({
  selector: 'app-sed',
  templateUrl: './sed.component.html',
  styleUrls: ['./sed.component.css']
})

export class SedComponent implements OnInit {

  // @Input()
  // datesEasterYear: any;


  // keyNewYearKey: number;
  // monthsArray: string[];
  // sumWeeks: number;
  // currentWeek: number;
  // weekAfterPyatidesyatnica: number;
  // glas: string;

  // timeBoxVozdvijjenie: number;
  // sumWeeksAfterVozdvijjenie: number;
  // timeBox = new Date().getTime();
  // numberVozdvijjenie: number;

  // yearLastEaster: Date;
  // yearNextEaster: Date;

  // otstupkaV: number;
  // prestupkaV: number;

  // mif: Date;
  // betweenWeeks: number;
  // mifRussianDate?: string;

  /**
   * CSS седмицы 
   */
  sedStyle: object = { "color": "#e3423477", "font-weight": "bold", "font-size": "1.5em" };

  v_year: boolean;
  stupka: string;

  constructor(public _sedService: SedService) {
  }
  
  ngOnInit() {

  }

}



// С седмицами окончено.
// Продолжение в расширениях этого класса
