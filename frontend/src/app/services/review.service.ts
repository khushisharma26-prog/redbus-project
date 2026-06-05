import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private API = `${API_URL}/api/reviews`;

  constructor(private http: HttpClient) {}

  getReviews(routeId: string) {
    return this.http.get<any>(`${this.API}/${routeId}`);
  }

  addReview(data: any) {
    return this.http.post(this.API, data);
  }
}