import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaskhaComponent } from './paskha/paskha.component';
import { SprComponent } from './spr/spr.component';
import { ComponentTestingComponent } from './component-testing/component-testing.component';
import { RrrComponent } from './rrr/rrr.component';

const routes: Routes = [

  { path: 'spr', component: SprComponent },
  { path: 'paskha', component: PaskhaComponent },
  { path: 'component-testing', component: ComponentTestingComponent },
  {path: 'rrr', component: RrrComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
