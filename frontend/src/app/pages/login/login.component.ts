import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(
    public lang: LanguageService,
    private router: Router,
    private auth: AuthService
  ) {}

  async login() {
    this.error = '';
    this.loading = true;

    if (!this.email || !this.password) {
      this.error = 'Please fill in all fields';
      this.loading = false;
      return;
    }

    try {
      const result = await this.auth.login(this.email, this.password);

      if (result.token && result.user) {
        this.auth.saveAuth(result.token, result.user);
        this.router.navigate(['/routes']);
      } else {
        this.error = result.message || 'Invalid email or password';
      }
    } catch (err) {
      this.error = 'Server error. Please try again later.';
    }

    this.loading = false;
  }
}