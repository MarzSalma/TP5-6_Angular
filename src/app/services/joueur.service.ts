import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { EquipeWrapped } from '../model/EquipeWrapped.model';

const httpOtions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  apiURLEq: string = 'http://localhost:8091/joueurs/Eq';
  joueurs!: Joueur[];
  joueur!: Joueur;
  equipes!: Equipe[];
  joueursRecherche?: Joueur[];

  constructor(private http: HttpClient) {
    // this.equipes = [
    //   { idEq: 1, nomEq: 'Real Madrid' },
    //   { idEq: 2, nomEq: 'Seville FC' },
    //   { idEq: 3, nomEq: 'Al Nassr' },
    //   { idEq: 4, nomEq: 'Barcelona' },
    //   { idEq: 5, nomEq: 'Manchester City' },
    //   { idEq: 6, nomEq: 'Liverpool' },
    // ];
    // this.joueurs = [
    //   {
    //     idJoueur: 1,
    //     nomJoueur: 'Cristiano Ronaldo',
    //     datenaissance: new Date('05/02/1985'),
    //     // equipe: { idEq: 3, nomEq: 'Al Nassr' },
    //     position: 'attaquant',
    //     email: 'salmamarzouk236@gmail.com',
    //   },
    //   {
    //     idJoueur: 2,
    //     nomJoueur: 'Luka Modrić ',
    //     datenaissance: new Date('09/09/1985'),
    //     // equipe: { idEq: 1, nomEq: 'Real Madrid' },
    //     position: 'milieu',
    //     email: 'salmamarzouk236@gmail.com',
    //   },
    //   {
    //     idJoueur: 3,
    //     nomJoueur: 'Sergio Ramos ',
    //     datenaissance: new Date('1986/03/30'),
    //     // equipe: { idEq: 2, nomEq: 'Seville FC' },
    //     position: 'defenseur central',
    //     email: 'salmamarzouk236@gmail.com',
    //   },
    //   {
    //     idJoueur: 4,
    //     nomJoueur: 'Jude Bellingham ',
    //     datenaissance: new Date('2003/05/29'),
    //     // equipe: { idEq: 1, nomEq: 'Real Madrid' },
    //     position: 'milieu',
    //     email: 'salmamarzouk236@gmail.com',
    //   },
    //   {
    //     idJoueur: 5,
    //     nomJoueur: 'Mohamed Salah ',
    //     datenaissance: new Date('1992/05/15'),
    //     // equipe: { idEq: 6, nomEq: 'Liverpool' },
    //     position: 'attaquant',
    //     email: 'salmamarzouk236@gmail.com',
    //   },
    // ];
  }
  listeJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(apiURL);
  }
  ajouterJoueur(j: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(apiURL, j, httpOtions);
  }
  supprimerJoueur(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOtions);
  }
  consulterJoueur(id: number): Observable<Joueur> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Joueur>(url);
  }
  trierJoueurs() {
    this.joueurs = this.joueurs.sort((n1, n2) => {
      if (n1.idJoueur! > n2.idJoueur!) {
        return 1;
      }
      if (n1.idJoueur! < n2.idJoueur!) {
        return -1;
      }
      return 0;
    });
  }
  updateJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.put<Joueur>(apiURL, joueur, httpOtions);
  }

  // listeEquipes(): Observable<Equipe[]> {
  //   return this.http.get<Equipe[]>(`${apiURL}/Eq`);
  // }

  listeEquipes(): Observable<EquipeWrapped> {
    return this.http.get<EquipeWrapped>(this.apiURLEq);
  }

  consulterEquipe(id: number): Equipe {
    return this.equipes.find((Eq) => Eq.idEq == id)!;
  }
  rechercherParEquipe(idEq: number): Observable<Joueur[]> {
    const url = `${apiURL}/joueurEq/${idEq}`;
    return this.http.get<Joueur[]>(url);
  }

  rechercherParNom(nom: string):Observable< Joueur[]> {
    const url = `${apiURL}/joueurByName/${nom}`;
    return this.http.get<Joueur[]>(url);
    }

  ajouterEquipe( eq: Equipe):Observable<Equipe>{
    return this.http.post<Equipe>(this.apiURLEq, eq, httpOtions);
    }

  // rechercherParEquipe(idEq: number): Joueur[] {
  //   this.joueursRecherche = [];
  //   this.joueurs.forEach((cur, index) => {
  //     if (idEq == cur.equipe?.idEq) {
  //       console.log('cur ' + cur);
  //       this.joueursRecherche?.push(cur);
  //     }
  //   });
  //   return this.joueursRecherche;
  // }

  // ajouterEquipe(equipe: Equipe): Equipe {
  //   const newId =
  //     this.equipes.length > 0
  //       ? Math.max(...this.equipes.map((eq) => eq.idEq ?? 0)) + 1
  //       : 1;
  //   equipe.idEq = newId;
  //   this.equipes.push(equipe);
  //   return equipe;
  // }
}
