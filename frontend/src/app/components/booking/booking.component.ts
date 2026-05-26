import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: true,
  selector: 'app-booking',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

  bookingData = {
    name: '',
    email: '',
    source: '',
    destination: '',
    date: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public lang: LanguageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bookingData.source = params['source'] || '';
      this.bookingData.destination = params['destination'] || '';
    });
  }

  submitBooking() {
    this.http.post('http://localhost:5000/api/bookings', this.bookingData)
      .subscribe({
        next: () => {
          // trigger notification
          this.http.post(
            'http://localhost:5000/api/notifications/booking',
            { email: this.bookingData.email }
          ).subscribe();

          // go to payment page
          this.router.navigate(['/payment']);
        },
        error: () => {
          alert('Booking failed');
        }
      });
  }
}
