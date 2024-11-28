import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Equipe } from '../model/equipe.model';
import { EquipeWrapped } from '../model/EquipeWrapped.model';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
})
export class AddJoueurComponent implements OnInit {
  public newJoueur = new Joueur();
  myform!: FormGroup;
  equipes!: Equipe[];
  newIdEq!: number;

  constructor(
    private joueurService: JoueurService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.joueurService.listeEquipes().subscribe((eq: EquipeWrapped) => {
      this.equipes = eq._embedded?.equipes;
      console.log(eq);
    });

    // Initialize the form group
    this.myform = this.formBuilder.group({
      idJoueur: ['', [Validators.required]],
      nomJoueur: [null, [Validators.required, Validators.minLength(3)]],
      datenaissance: ['', [Validators.required]],
      equipe: ['', Validators.required],
      position: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addJoueur() {
    if (this.myform.invalid) {
      return;
    }

    // Assign values from the form to the newJoueur object
    this.newJoueur.idJoueur = this.myform.value.idJoueur;
    this.newJoueur.nomJoueur = this.myform.value.nomJoueur;
    this.newJoueur.datenaissance = this.myform.value.datenaissance;
    this.newJoueur.position = this.myform.value.position;
    this.newJoueur.email = this.myform.value.email;

    //Add the new equipe
    this.newJoueur.equipe = this.equipes.find(
      (eqs) => eqs.idEq == this.newIdEq
    )!;

    // Add the new player
    this.joueurService.ajouterJoueur(this.newJoueur).subscribe(
      (joueur) => {
        console.log('Joueur ajouté:', joueur);
        this.router.navigate(['joueurs']);
      },
      (error) => {
        console.error("Erreur d'ajout:", error);
      }
    );

    // Reset the form after submission
    this.myform.reset();
  }
}
