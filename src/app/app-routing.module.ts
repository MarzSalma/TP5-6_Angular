import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParJoueurComponent } from './recherche-par-joueur/recherche-par-joueur.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: "joueurs", component : JoueursComponent},
  {path: "add-joueur", component : AddJoueurComponent},
  {path: "", redirectTo: "joueurs", pathMatch: "full"},
  {path: "updateJoueur/:id", component: UpdateJoueurComponent},
  {path: "rechercheParEquipe", component : RechercheParEquipeComponent},
  {path: "rechercheParJoueur", component : RechercheParJoueurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
