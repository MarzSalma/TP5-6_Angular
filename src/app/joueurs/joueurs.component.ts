import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
})
export class JoueursComponent implements OnInit {
  joueurs?: Joueur[] = [];
  currentJoueur?: Joueur;
  constructor(
    private joueurService: JoueurService,
    public authService: AuthService
  ) {
    // this.joueurs = this.joueurService.listeJoueurs();
  }

  ngOnInit(): void {
    this.joueurService.listeJoueurs().subscribe((jou) => {
      console.log(jou);
      this.joueurs = jou;
    });
  }

  chargerJoueurs() {
    this.joueurService.listeJoueurs().subscribe((jou) => {
      console.log(jou);
      this.joueurs = jou;
    });
  }
  supprimerJoueur(j: Joueur) {
    if (j.idJoueur !== undefined) {
      let conf = confirm('Etes-vous sûr ?');
      if (conf) {
        this.joueurService.supprimerJoueur(j.idJoueur).subscribe(() => {
          console.log('joueur supprimer');
          this.chargerJoueurs();
        });
      }
    } else {
      console.error("L'ID du joueur est indéfini");
    }
  }
}
