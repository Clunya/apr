import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaskhaComponent } from './paskha/paskha.component';
import { SprComponent } from './spr/spr.component';
import { SedComponent } from './sed/sed.component';
import { XxxService } from './xxx.service';

@NgModule({
  declarations: [
    AppComponent,
    PaskhaComponent,
    SprComponent,
    SedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [XxxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
