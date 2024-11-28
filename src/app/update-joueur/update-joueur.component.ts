import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurService } from '../services/joueur.service';
import { Equipe } from '../model/equipe.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: [],
})
export class UpdateJoueurComponent implements OnInit {
  public currentJoueur = new Joueur();
  equipes!: Equipe[];
  updateEqId!: number;
  myform!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private joueurService: JoueurService,
    private formBuilder: FormBuilder
  ) {}



  ngOnInit(): void {
    // this.equipes = this.joueurService.listeEquipes();
    //  console.log(this.route.snapshot.params.id);

    this.joueurService.listeEquipes().subscribe((eq) => {
      console.log(eq);
      this.equipes = eq._embedded.equipes;
    });
    
    this.joueurService
      .consulterJoueur(this.activatedRoute.snapshot.params['id'])
      .subscribe((j) => {
        this.currentJoueur = j;
        this.updateEqId =this.currentJoueur.equipe!.idEq!;
      });

      

    this.myform = this.formBuilder.group({
      idJoueur: ['', [Validators.required]],
      nomJoueur: [null, [Validators.required, Validators.minLength(3)]],
      datenaissance: ['', [Validators.required]],
      equipe: ['', [Validators.required]],
      position: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  updateJoueur() {
    console.log(this.updateEqId);
    this.currentJoueur.equipe = this.equipes.find(eq => eq.idEq == this.updateEqId)!;
    this.joueurService.updateJoueur(this.currentJoueur).subscribe(() => {
      this.router.navigate(['joueurs']);
    });
  }
  
}
