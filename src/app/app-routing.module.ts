import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaskhaComponent } from './paskha/paskha.component';
import { AppComponent } from './app.component';
import { SprComponent } from './spr/spr.component';

const routes: Routes = [

  { path: 'spr', component: SprComponent },
  {path: 'paskha', component: PaskhaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
