import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private API = 'https://redbus-project-1-zvof.onrender.com';

  constructor(private http: HttpClient) {}

  getReviews(routeId: string) {
    return this.http.get<any>(`${this.API}/${routeId}`);
  }

  addReview(data: any) {
    return this.http.post(this.API, data);
  }
}
