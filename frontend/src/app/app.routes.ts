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
import { AuthGuard } from './services/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'routes', component: RoutesComponent, canActivate: [AuthGuard] },
  { path: 'reviews', component: RouteReviewsComponent, canActivate: [AuthGuard] },
  { path: 'community', component: CommunityPostsComponent, canActivate: [AuthGuard] },
  { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'payment-success', component: PaymentSuccessComponent, canActivate: [AuthGuard] }
];









