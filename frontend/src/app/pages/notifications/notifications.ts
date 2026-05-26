import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { LanguageService } from '../../services/language.service'; // ✅ ADD

@Component({
  standalone: true,
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html'
})
export class NotificationsComponent implements OnInit {

  notifications: any[] = [];

  constructor(
    private service: NotificationService,
    public lang: LanguageService    // ✅ ADD THIS
  ) {}

  ngOnInit(): void {
    this.service.getNotifications().subscribe(res => {
      this.notifications = res;
    });
  }
}
