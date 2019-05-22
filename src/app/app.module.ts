import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaskhaComponent } from './paskha/paskha.component';
import { SedComponent } from './sed/sed.component';
import { DateService } from './svrs/date.service';
import { ComponentTestingComponent } from './component-testing/component-testing.component';
import { LinksService } from './svrs/links.service';


@NgModule({
  declarations: [
    AppComponent,
    PaskhaComponent,
    SedComponent,
    ComponentTestingComponent,

  ],

  /**
   * Модули импортируемые вверху файла `app.module.ts
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  /**
   * Поставщики
   */
  providers: [
    DateService,
    LinksService,
    SedComponent

  ],
  /**
   * Загрузчик
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
