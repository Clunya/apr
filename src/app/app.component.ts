import { Component, OnInit } from '@angular/core';

/**
 * Директива @Component. В этой директиве описывается селектор, который является тэгом в теле которого будет прописано то, что указано в этом файле.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
* В данном классе реализуется метод ngOnInit. В методе ngOnInit  инициализируются всё необходимое до загрузки компонента дом. Самая правильное, это прописать в этом  методе только самые необходимые данные.
 */
export class AppComponent implements OnInit {
  title = 'apracos';
  mainPage: string = "Главная страница";
  public timeOut: string = "classOFF";

  constructor() {
     
   }
  ngOnInit() {
    // setTimeout(() => {this.timeOut = "classON"}, 3);
       
     
   }
}
