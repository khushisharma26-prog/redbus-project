import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { LanguageService } from './services/language.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.html'
})
export class AppComponent {

  isDarkMode = false;

  constructor(
    public lang: LanguageService,
    public auth: AuthService
  ) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleLanguage() {
    this.lang.toggleLanguage();
  }

  logout() {
    this.auth.logout();
  }
}