import { Component, OnInit, Input } from '@angular/core';
import { PaskhaComponent } from '../paskha/paskha.component';

@Input()

@Component({
  selector: 'app-sed',
  templateUrl: './sed.component.html',
  styleUrls: ['./sed.component.css']
})
export class SedComponent implements OnInit {

  sedAll: number;

  constructor() { }

  ngOnInit() {
  }


  // spr3 --- получить значения переменных lastEaster и  nextEaster
  // выичслить количество седмиц бгода

  seddAll = nextEaster - lastEaster;
  
  
  

}
