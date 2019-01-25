import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spr',
  templateUrl: './spr.component.html',
  styleUrls: ['./spr.component.css']
})
export class SprComponent implements OnInit {
  sprTarget: string = "Задача: ";
  sprAction: string = "Действие: ";
  
  constructor() { }

  ngOnInit() {
  }

}
