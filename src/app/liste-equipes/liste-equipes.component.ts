import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-liste-equipes',
  templateUrl: './liste-equipes.component.html',
  styles: [],
})
export class ListeEquipesComponent implements OnInit {
  equipes: Equipe[] = [];

  ajout: boolean = true;

  updatedEq: Equipe = { idEq: 0, nomEq: '' };

  nouvelleEquipe: Equipe = {
    idEq: 0, // ou une autre valeur par défaut
    nomEq: '', // ou une valeur par défaut
  };

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.chargerEquipes();
  }

  ajouterEquipe(nouvelleEquipe: Equipe): void {
    this.joueurService.ajouterEquipe(nouvelleEquipe);
    this.chargerEquipes(); // Actualise l'affichage de la liste après l'ajout
  }

  equipeUpdated(equipe: Equipe): void {
    console.log('Équipe reçue du composant updatedequipe:', equipe);
    if (this.ajout) {
      // Ajout de la nouvelle équipe
      this.joueurService.ajouterEquipe(equipe);
    } else {
      // Modification de l'équipe existante
      const index = this.equipes.findIndex((e) => e.idEq === equipe.idEq);
      if (index !== -1) {
        this.equipes[index] = equipe;
      }
      this.ajout = true; // Retourne en mode ajout
    }

    // Actualise la liste des équipes
    this.chargerEquipes();
    this.resetEquipe(); // Réinitialise les champs pour un nouvel ajout/modification
  }

  chargerEquipes(): void {
    this.equipes = this.joueurService.listeEquipes();
    console.log(this.equipes);
  }

  updateEq(equipe: Equipe) {
    this.updatedEq = equipe;
    this.ajout = false;
  }

  resetEquipe() {
    this.updatedEq = { idEq: 0, nomEq: '' };
  }
}
