import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../../services/review.service';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: true,
  selector: 'app-route-reviews',
  imports: [CommonModule, FormsModule],
  templateUrl: './route-reviews.html'
})
export class RouteReviewsComponent implements OnInit {

  routeId = 'BLR-HYD';
  reviews: any[] = [];
  averageRating = 0;

  newReview = {
    routeId: this.routeId,
    userName: '',
    rating: 5,
    comment: ''
  };

  constructor(
  private service: ReviewService,
  public lang: LanguageService   
) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.service.getReviews(this.routeId).subscribe(res => {
      this.reviews = res.reviews;
      this.averageRating = res.averageRating;
    });
  }

  submit(): void {
    this.service.addReview(this.newReview).subscribe(() => {
      this.newReview = { routeId: this.routeId, userName: '', rating: 5, comment: '' };
      this.loadReviews();
    });
  }
}
