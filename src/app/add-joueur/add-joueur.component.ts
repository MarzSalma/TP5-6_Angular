import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  
})
export class AddJoueurComponent implements OnInit {
  public newJoueur = new Joueur();
  equipes! : Equipe[];
  newEquipe!: Equipe;
  newIdEq!:number;
  myform!:FormGroup;

  constructor(private joueurService: JoueurService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.equipes = this.joueurService.listeEquipes();
    this.myform = this.formBuilder.group({
      idJoueur: ['', [Validators.required, Validators.max(15)]], 
      nomJoueur: [null, [Validators.required, Validators.minLength(3)]],
      datenaissance: ['', [Validators.required]],
      equipe: ['', [Validators.required]],
      position: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  addJoueur() {
    this.newJoueur.idJoueur = this.myform.value.idJoueur; 
    this.newJoueur.nomJoueur = this.myform.value.nomJoueur; 
    this.newJoueur.datenaissance = this.myform.value.datenaissance; 
    this.newJoueur.position = this.myform.value.position; 
    this.newJoueur.email = this.myform.value.email; 
  
    this.newIdEq = this.myform.value.equipe; 
    this.newEquipe = this.joueurService.consulterEquipe(this.newIdEq); 
    this.newJoueur.equipe = this.newEquipe; 
  
    this.joueurService.ajouterJoueur(this.newJoueur);
  
    this.myform.reset();
    this.router.navigate(['joueurs']);
  }
 
}
