import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';
import { API_URL } from '../../config';

@Component({
  standalone: true,
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html'
})
export class NotificationsComponent implements OnInit {

  private API_NOTIFICATIONS = `${API_URL}/api/notifications`;
  private API_BOOKINGS = `${API_URL}/api/bookings`;

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

    this.http.get<any[]>(`${this.API_NOTIFICATIONS}/${user.email}`)
      .subscribe(notes => {
        this.notifications = notes;
      });

    this.http.get<any[]>(`${this.API_BOOKINGS}/${user.email}`)
      .subscribe(bookings => {
        this.bookings = bookings;
        this.loading = false;
      });
  }
}