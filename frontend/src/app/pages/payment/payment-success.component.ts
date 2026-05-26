import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-payment-success',
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Payment Successful 🎉</h2>
      <p>Your ticket has been booked successfully.</p>
      <button (click)="goHome()">Go to Home</button>
    </div>
  `
})
export class PaymentSuccessComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/routes']);
  }
}
