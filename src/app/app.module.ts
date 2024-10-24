import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParJoueurComponent } from './recherche-par-joueur/recherche-par-joueur.component';
import { SearchFilterPipe } from './search-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    UpdateJoueurComponent,
    RechercheParEquipeComponent,
    RechercheParJoueurComponent,
    SearchFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
