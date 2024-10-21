import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParJoueurComponent } from './recherche-par-joueur/recherche-par-joueur.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    UpdateJoueurComponent,
    RechercheParEquipeComponent,
    RechercheParJoueurComponent,
    SearchFilterPipe,
    RegisterComponent,
    LoginComponent,
    

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
