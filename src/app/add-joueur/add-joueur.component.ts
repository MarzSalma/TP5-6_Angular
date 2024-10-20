import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrl: './add-joueur.component.css',
})
export class AddJoueurComponent implements OnInit {
  newJoueur = new Joueur();
  equipes! : Equipe[];
  newEquipe!: Equipe;
  newIdEq!:number;
  
  constructor(private joueurService: JoueurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipes = this.joueurService.listeEquipes();
  }
  addJoueur() {
    this.newEquipe =
    this.joueurService.consulterEquipe(this.newIdEq);
    this.newJoueur.equipe = this.newEquipe;
    this.joueurService.ajouterJoueur(this.newJoueur);
    this.router.navigate(['joueurs']);
  }
 
}
