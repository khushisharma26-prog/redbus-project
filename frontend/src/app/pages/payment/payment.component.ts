import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {

  amount = 500;

  paymentData = {
    method: 'upi',
    upiId: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  payNow() {
    alert('Payment successful!');
    this.router.navigate(['/payment-success']);
  }
}
