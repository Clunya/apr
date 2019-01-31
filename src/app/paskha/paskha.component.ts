import { Component, OnInit, Injectable } from '@angular/core';
import { XxxService } from '../xxx.service';

@Injectable()
@Component({
  selector: 'app-paskha',
  templateUrl: './paskha.component.html',
  styleUrls: ['./paskha.component.css'],
  providers:  [ XxxService ]
})
export class PaskhaComponent implements OnInit {

  keyYear: any; // Главный ключ
  timeBox: any;
  lastEaster: string;
  nextEaster: any;
  paskhaCurrentYear: any;
  timeBox2: any;
  currentYear: any;
  rrr: Object;
  keyNewYearKey: string;
  paskhalia: any;
  paskhalia2: any;


   monthsArray: any  = [
    "января", "февраля", "марта", "апреля", "май", "июня", "июля",
    "августа", "сентября", "октября", "ноября", "декабря"
                  ]
  



  constructor(public _xxxService: XxxService) {

    

   }

  ngOnInit() {

    this._xxxService.getPaskhaliaFromJSON().subscribe(data => this.paskhalia = data);
    this.paskhalia2 = this._xxxService.paskhaliaArray();

    console.log(this.paskhalia2, "пасхалия");
    
    
    
    // spr1 (spravka 1 http://localhost:4200/spr)
    this.timeBox = new Date();
        
    // prb1 (problema 1, смотри видео prb-1.mov)
    this.currentYear = this.timeBox.getFullYear();
    this.paskhaCurrentYear = new Date(this.timeBox.getFullYear());
    // this.paskhalia[this.currentYear];

     // Вычисление разницы времен, которая показывает состояние Праздника Новый год (был или нет)
    
     var dateDeference = this.paskhaCurrentYear - this.timeBox;
      
     if (dateDeference < 0) {
       
       // ---------------------------
       // если НГ небыло в Пасхальном году
       this.keyYear = (this.timeBox.getFullYear())+1;
     // ---------------------------
       
       this.keyNewYear(this.keyYear);
       this.keyNewYearKey = "1";
     }
 
     else {
        
       // ---------------------------
       // если НГ был в текущем Пасхальном году
       this.keyYear = (this.timeBox.getFullYear());
       this.keyNewYearKey = "0";
     // ---------------------------
       
        this.keyNewYear(this.keyYear);
       this.keyNewYearKey = "1";
     }
    
  }

  keyNewYear(keyYear: number) {
    
    console.log(keyYear, " -- keyYear");
    
    this.lastEaster = "ПРОШЕДШАЯ ПАСХА: " +
      this.paskhalia2[this.keyYear-1][1] + " " + this.monthsArray[this.paskhalia2[this.keyYear][0]] 
   ;
      

    this.nextEaster = "ГРЯДУЩАЯ ПАСХА: " + (this.paskhalia2[this.keyYear][1]) + " " + (this.monthsArray[this.paskhalia2[this.keyYear][0]]);
    
      }
}


