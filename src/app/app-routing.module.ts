import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  {path:"", component:ListeComponent},
  {path:"articles", redirectTo: ""},
  {path:"details/:id", component:DetailsComponent},
  {path:"ajouter", component:AjouterComponent},
  {path:"ajout", component:AjoutComponent},
  {path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
