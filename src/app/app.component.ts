import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apracos';
  mainPage = "Главная страница";
  public timeOut = "classOFF";
  constructor() {
     
   }
  ngOnInit() {
    setTimeout(() => {this.timeOut = "classON"}, 0);
       
     
   }
}
