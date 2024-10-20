import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
})
export class JoueursComponent implements OnInit {
  joueurs?: Joueur[];
  currentJoueur?: Joueur;
  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.joueurs = this.joueurService.listeJoueurs();
  }
  supprimerJoueur(j: Joueur) {
    //console.log(j);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.joueurService.supprimerJoueur(j);
  }
  updateJoueur(j: Joueur) {
    this.currentJoueur = j; // Assign the joueur to currentJoueur
    this.joueurService.updateJoueur(this.currentJoueur);
  }
}
