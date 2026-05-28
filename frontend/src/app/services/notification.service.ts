import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private API = 'https://redbus-project-1-zvof.onrender.com';

  constructor(private http: HttpClient) {}

  getNotifications() {
    return this.http.get<any[]>(this.API);
  }
}
