import { Component, Input } from '@angular/core';
import { SedComponent } from './sed.component';
// import { DateService } from '../xxx.service';

@Component({
    selector: 'app-linkToSed',
templateUrl: './link.component.html',
    styleUrls: ['./sed.component.css']
})
  
  /**
   * Расширение класса sed.component. 
   * Отображает ссылку на седмицу ствола и формирует ссылку на страницу текущего дня. 
   * 
   */
export class LinkComponent extends SedComponent {
    

this.linkToCurrentSeed = '<a href="' + ('#seed' + sedmica + '"') + ' title="Сегодня : ' + massDays[numDay] + '">' + sedmica + '</a>';
 
  per = this.glasSed("3")
    // monthsArray: string[];
    

}
