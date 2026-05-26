import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    public lang: LanguageService,
    private router: Router
  ) {}

  signup() {

    alert(this.lang.t('signup') + ' successful (UI only)');
    this.router.navigate(['/login']); 
  }
}
