import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Equipe } from '../model/equipe.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.component.html',
  styles: ``,
})
export class RechercheParEquipeComponent implements OnInit {
  joueurs?: Joueur[];
  equipes?: Equipe[];
  IdEquipe?: number;

  constructor(private joueurService: JoueurService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.joueurService.listeEquipes().subscribe((eq) => {
      this.equipes = eq._embedded.equipes;
      console.log(eq);
    });
  }
  supprimerJoueur(j: Joueur) {
    //console.log(j);
    //let conf = confirm('Etes-vous sûr ?');
    // if (conf) this.joueurService.supprimerJoueur(j);
  }
  onChange() {
    // console.log(this.IdEquipe);
    //if(this.IdEquipe!==undefined){
    //this.joueurs = this.joueurService.rechercherParEquipe(this.IdEquipe);
    //}else{
    //this.joueurs = [];
    this.joueurService
      .rechercherParEquipe(this.IdEquipe!)
      .subscribe((j) => {
        this.joueurs = j;
      });
  }
}

//}
