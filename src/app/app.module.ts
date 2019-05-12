import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaskhaComponent } from './paskha/paskha.component';
import { SedComponent } from './sed/sed.component';
import { DateService } from './date.service';
import { ComponentTestingComponent } from './component-testing/component-testing.component';


@NgModule({
  declarations: [
    AppComponent,
    PaskhaComponent,
    SedComponent,
    ComponentTestingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
