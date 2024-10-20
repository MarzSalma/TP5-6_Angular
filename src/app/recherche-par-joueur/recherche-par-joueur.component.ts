import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-joueur',
  templateUrl: './recherche-par-joueur.component.html',
  styles: ``,
})
export class RechercheParJoueurComponent implements OnInit {
  joueurs?: Joueur[];
  allJoueurs?: Joueur[];
  searchTerm?: string;

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.joueurs = this.joueurService.listeJoueurs();
    this.allJoueurs = this.joueurs;
  }

  onKeyUp(filterText: string) {
    this.joueurs = this.allJoueurs?.filter((item) =>
      item.nomJoueur?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
  supprimerJoueur(j: Joueur) {
    //console.log(j);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.joueurService.supprimerJoueur(j);
  }
}
