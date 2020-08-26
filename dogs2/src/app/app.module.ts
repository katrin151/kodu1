import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogViewComponent } from './dog-view/dog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
