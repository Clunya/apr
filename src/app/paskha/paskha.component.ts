/**
* Компонент вычисляющий прошедшую и грядущую Пасхи.
*
*/
import { Component, Injectable, OnInit } from '@angular/core';
import { DateService } from '../svrs/date.service';
import { Easter } from '../intrfc/interfaces';
import { LinksService } from '../svrs/links.service';
import { SedService } from '../svrs/sed.service';


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

export class PaskhaComponent implements OnInit {

  keyYear: number; // Главный ключ
  timeBox: Date;
  paskhaCurrentYear: Date;
  currentYear: number;
  keyNewYearKey: string;
  PASKHALIA: object;
  paskhaliaJSON: object;
  datesEasterYear: any;
  dateDeference: number;

  ruDateLastEaster: string;

  
  constructor (public _datesService: DateService, public _linksService: LinksService) {

    // this._datesService.getPaskhaliaFromJSON().subscribe(data => this.paskhaliaJSON = data); // инициализация переменной paskhaliaJSON значениями из файла paskhalia.json 

  }
  
  ngOnInit() {
    // инициализация интефейса компонента
    // console.log(this.timeBox);
  
  }

// Здесь должен быть код для управления интерфейсом html шаблона.

}
