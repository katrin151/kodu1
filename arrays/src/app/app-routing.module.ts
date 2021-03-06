import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsikViewComponent } from './isik-view/isik-view.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonNewComponent } from './person-new/person-new.component';


const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: "human/:id", component: IsikViewComponent},
  { path: "new", component: PersonNewComponent},
  { path: "edit/:id", component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
