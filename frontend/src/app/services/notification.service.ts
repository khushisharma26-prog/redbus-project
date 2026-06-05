import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private API = `${API_URL}/api/notifications`;

  constructor(private http: HttpClient) {}

  getNotifications() {
    return this.http.get<any[]>(this.API);
  }
}