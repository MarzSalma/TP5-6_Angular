import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-joueur',
  templateUrl: './recherche-par-joueur.component.html',
  styles: ``,
})
export class RechercheParJoueurComponent implements OnInit {
  joueurs?: Joueur[];
  allJoueurs?: Joueur[];
  searchTerm?: string;

  constructor(private joueurService: JoueurService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.joueurs = this.joueurService.listeJoueurs();
    //this.allJoueurs = this.joueurs;
    this.joueurService.listeJoueurs().subscribe((j) => {
      console.log(j);
      this.allJoueurs = j;
      this.joueurs = j; // Pour que le tableau soit affiché par défaut
    });
  }

  onKeyUp(filterText: string) {
    this.joueurs = this.allJoueurs?.filter((item) =>
      item.nomJoueur?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
  // rechercherJoueur(){
  //   this.joueurService.rechercherParNom(this.nomJoueur).subscribe(prods => {
  //   this.joueurs = prods;
  //   console.log(prods)});
  //   }

  supprimerJoueur(j: Joueur) {
    // console.log(j);
    //let conf = confirm('Etes-vous sûr ?');
    //if (conf) this.joueurService.supprimerJoueur(j);
  }
}
