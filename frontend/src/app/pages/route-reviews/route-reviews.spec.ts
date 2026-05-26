import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteReviews } from './route-reviews';

describe('RouteReviews', () => {
  let component: RouteReviews;
  let fixture: ComponentFixture<RouteReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteReviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
