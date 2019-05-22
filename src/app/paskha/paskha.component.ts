/**
* Компонент вычисляющий прошедшую и грядущую Пасхи.
*
*/
import { Component, Injectable, OnInit } from '@angular/core';
import { DateService } from '../svrs/date.service';
import { Easter } from '../intrfc/interfaces';
import { LinksService } from '../svrs/links.service';


@Injectable()

@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css'],
  providers: [ // открывает доступ к сервисам данных
    DateService,
    LinksService
  ] 
})

export class PaskhaComponent implements OnInit, Easter {

  keyYear: number; // Главный ключ
  timeBox: Date;
  paskhaCurrentYear: Date;
  currentYear: number;
  keyNewYearKey: string;
  paskhalia: object;
  paskhalia2: object;
  datesEasterYear: any;
  dateDeference: number;

  
  constructor(public _datesService: DateService, public _linksService: LinksService) {

  }
  
  ngOnInit() {
    // инициализация интефейса компонента
    // console.log(this.timeBox);
    this._datesService.getPaskhaliaFromJSON().subscribe(data => this.paskhalia2 = data);
    
    this.paskhalia = this._datesService.paskhaliaArray();
    
    this.datesEasterYear = this._datesService.datesEasterYear;
    this.currentYear = this._datesService.currentYear;
    this.keyNewYearKey = this._datesService.keyNewYearKey;
  }

// Здесь должен быть код для управления интерфейсом html шаблона.

}
