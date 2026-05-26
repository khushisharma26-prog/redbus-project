import { Routes } from '@angular/router';
import { RouteReviewsComponent } from './pages/route-reviews/route-reviews';
import { CommunityPostsComponent } from './pages/community-posts/community-posts';
import { RoutesComponent } from './pages/routes/routes';
import { NotificationsComponent } from './pages/notifications/notifications';
import { BookingComponent } from './components/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PaymentSuccessComponent } from './pages/payment/payment-success.component';
import { PaymentComponent } from './pages/payment/payment.component';


export const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'reviews', component: RouteReviewsComponent },
  { path: 'community', component: CommunityPostsComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent }


];









