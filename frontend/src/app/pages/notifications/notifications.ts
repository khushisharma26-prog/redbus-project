import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html'
})
export class NotificationsComponent implements OnInit {

  private API_NOTIFICATIONS = 'http://localhost:5000/api/notifications';
  private API_BOOKINGS = 'http://localhost:5000/api/bookings';

  notifications: any[] = [];
  bookings: any[] = [];
  loading = true;

  constructor(
    public lang: LanguageService,
    private auth: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const user = this.auth.getCurrentUserFromStorage();
    if (!user || !user.email) {
      this.loading = false;
      return;
    }

    // Get notifications for this user
    this.http.get<any[]>(`${this.API_NOTIFICATIONS}/${user.email}`)
      .subscribe(notes => {
        this.notifications = notes;
      });

    // Get bookings for this user
    this.http.get<any[]>(`${this.API_BOOKINGS}/${user.email}`)
      .subscribe(bookings => {
        this.bookings = bookings;
        this.loading = false;
      });
  }
}