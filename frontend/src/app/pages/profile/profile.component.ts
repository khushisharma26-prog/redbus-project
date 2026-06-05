import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user: any = { name: '', email: '' };

  constructor(
    public lang: LanguageService,
    private router: Router,
    private auth: AuthService
  ) {
    const currentUser = this.auth.getCurrentUserFromStorage();
    if (currentUser) {
      this.user = currentUser;
    }
  }

  logout() {
    this.auth.logout();
  }
}