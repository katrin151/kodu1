import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogListComponent } from "./dog-list/dog-list.component";
import { DogViewComponent } from "./dog-view/dog-view.component";

//const routes: Routes = [];
const routes: Routes = [
  { path: '', component: DogListComponent },
  { path: 'dog/:id', component: DogViewComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
