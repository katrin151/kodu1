import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IsikViewComponent } from './isik-view/isik-view.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PersonEditComponent } from './person-edit/person-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IsikViewComponent,
    PersonNewComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
