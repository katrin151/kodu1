import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsimeneComponent } from './esimene/esimene.component';
import { TeineComponent } from './teine/teine.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    EsimeneComponent,
    TeineComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
