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

  private API_BOOKINGS = 'http://localhost:5000/api/bookings';
  private API_NOTIFICATIONS = 'http://localhost:5000/api/notifications';

  bookingData = {
    name: '',
    email: '',
    source: '',
    destination: '',
    date: ''
  };

  message = '';
  loading = false;

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
    this.loading = true;
    this.message = '';

    if (!this.bookingData.name || !this.bookingData.email || !this.bookingData.date) {
      this.message = 'Please fill in all required fields';
      this.loading = false;
      return;
    }

    this.http.post(this.API_BOOKINGS, this.bookingData)
      .subscribe({
        next: (res: any) => {
          // Send booking confirmation notification + email with full details
          this.http.post(this.API_NOTIFICATIONS + '/booking', {
            email: this.bookingData.email,
            name: this.bookingData.name,
            source: this.bookingData.source,
            destination: this.bookingData.destination,
            date: this.bookingData.date
          })
            .subscribe({
              next: () => {
                this.loading = false;
                this.message = 'Booking successful! Redirecting to payment...';
                setTimeout(() => {
                  this.router.navigate(['/payment']);
                }, 2000);
              },
              error: () => {
                this.loading = false;
                this.message = 'Booking successful! Redirecting to payment...';
                setTimeout(() => {
                  this.router.navigate(['/payment']);
                }, 2000);
              }
            });
        },
        error: (err) => {
          this.loading = false;
          this.message = 'Booking failed. Please try again.';
        }
      });
  }
}