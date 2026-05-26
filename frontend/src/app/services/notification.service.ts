import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private API = 'http://localhost:5000/api/notifications';

  constructor(private http: HttpClient) {}

  getNotifications() {
    return this.http.get<any[]>(this.API);
  }
}
