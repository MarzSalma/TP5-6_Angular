import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.component.html',
  styles: ``,
})
export class RechercheParEquipeComponent implements OnInit {
  joueurs?: Joueur[];
  equipes?: Equipe[];
  IdEquipe? : number;

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.equipes = this.joueurService.listeEquipes();
    this.joueurs = [];
  }
  supprimerJoueur(j: Joueur) {
    //console.log(j);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.joueurService.supprimerJoueur(j);
  }
  onChange(){
    console.log(this.IdEquipe);
    if(this.IdEquipe!==undefined){
    this.joueurs = this.joueurService.rechercherParEquipe(this.IdEquipe);
  }else{
    this.joueurs = [];
  }
}
  
}
