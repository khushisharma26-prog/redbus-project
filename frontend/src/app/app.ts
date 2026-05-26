import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.html'
})
export class AppComponent {

  isDarkMode = false;   

  constructor(
    public lang: LanguageService,
    private router: Router
  ) {}


  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
  localStorage.removeItem('isLoggedIn');
  this.router.navigate(['/login']);
}


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;   
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleLanguage() {
    this.lang.toggleLanguage();
  }
}
