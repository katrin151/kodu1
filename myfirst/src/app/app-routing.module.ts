import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
import { EsimeneComponent } from './esimene/esimene.component';
import { TeineComponent } from './teine/teine.component';
import { MainComponent } from './main/main.component'; 



const routes: Routes = [
  { path: '' , component: MainComponent},
  { path: '.scr/app/esimene', component: EsimeneComponent },
  { path: '.scr/app/teine', component: TeineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
