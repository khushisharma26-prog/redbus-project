import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };
  confirmPassword = '';
  error = '';
  success = '';
  loading = false;

  constructor(
    public lang: LanguageService,
    private router: Router,
    private auth: AuthService
  ) {}

  async signup() {
    this.error = '';
    this.success = '';
    this.loading = true;

    if (!this.user.name || !this.user.email || !this.user.password) {
      this.error = 'Please fill in all fields';
      this.loading = false;
      return;
    }

    if (this.user.password.length < 6) {
      this.error = 'Password must be at least 6 characters';
      this.loading = false;
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      this.loading = false;
      return;
    }

    try {
      const result = await this.auth.signup(this.user.name, this.user.email, this.user.password);

      if (result.token && result.user) {
        this.auth.saveAuth(result.token, result.user);
        this.success = 'Account created successfully!';
        setTimeout(() => {
          this.router.navigate(['/routes']);
        }, 1000);
      } else {
        this.error = result.message || 'Signup failed. Please try again.';
      }
    } catch (err) {
      this.error = 'Server error. Please try again later.';
    }

    this.loading = false;
  }
}