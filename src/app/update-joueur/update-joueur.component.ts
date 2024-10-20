import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurService } from '../services/joueur.service';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: [],
})
export class UpdateJoueurComponent implements OnInit {
  currentJoueur = new Joueur();
  equipes!: Equipe[];
  updateEqId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private joueurService: JoueurService
  ) {}

  ngOnInit(): void {
    this.equipes = this.joueurService.listeEquipes();
    // console.log(this.route.snapshot.params.id);
    this.currentJoueur = this.joueurService.consulterJoueur(
      this.activatedRoute.snapshot.params['id']
    );
    this.updateEqId = this.currentJoueur.equipe?.idEq ?? 0;
    console.log(this.currentJoueur);
  }
  updateJoueur() {
    //console.log(this.currentJoueur);
    this.currentJoueur.equipe = this.joueurService.consulterEquipe(
      this.updateEqId
    );
    this.joueurService.updateJoueur(this.currentJoueur);
    this.router.navigate(['joueurs']);
  }
}
