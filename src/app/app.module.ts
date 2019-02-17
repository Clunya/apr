import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaskhaComponent } from './paskha/paskha.component';
import { SprComponent } from './spr/spr.component';
import { SedComponent } from './sed/sed.component';
import { XxxService } from './xxx.service';
import { ComponentTestingComponent } from './component-testing/component-testing.component';
import { RrrComponent } from './rrr/rrr.component';
import { LinkComponent } from './sed/link.component';

@NgModule({
  declarations: [
    AppComponent,
    PaskhaComponent,
    SprComponent,
    SedComponent,
    ComponentTestingComponent,
    RrrComponent,
    LinkComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [XxxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
