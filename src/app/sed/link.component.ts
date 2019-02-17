import { Component, Input } from '@angular/core';
import { SedComponent } from './sed.component';
// import { XxxService } from '../xxx.service';

@Component({
    selector: 'app-sed2',
    template: '<h2>????? Ссылки на стихи Апракоса</h2>',
    styleUrls: ['./sed.component.css']
  })
export class LinkComponent extends SedComponent {
    
    @Input() datesEasterYear: any;
    // monthsArray: string[];
    per = this.glasSed("1")


}
