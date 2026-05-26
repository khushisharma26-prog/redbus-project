import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user = {
    name: 'Khushi Sharma',
    email: 'khushi@example.com'
  };

  constructor(
    public lang: LanguageService,
    private router: Router
  ) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
