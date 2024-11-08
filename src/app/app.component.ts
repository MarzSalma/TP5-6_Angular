import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host:{'ngSkipHydration':''}
})
export class AppComponent implements OnInit {
  title = 'Joueurs';

  constructor(public authService: AuthService,
    private router: Router) {
      
    }

  ngOnInit(): void {
    let isloggedin: string;
    let loggedUser: string;
    // if isloggedin is null so we set to  false

    isloggedin = localStorage.getItem('isloggedIn') ?? 'false';
    // and this to empty
    loggedUser = localStorage.getItem('loggedUser') ?? '';

    if (isloggedin != 'true' || !loggedUser) this.router.navigate(['/login']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout() {
    this.authService.logout();
  }
}
