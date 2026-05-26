import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteService } from '../../services/route.service';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: true,
  selector: 'app-routes',
  imports: [CommonModule, FormsModule],
  templateUrl: './routes.html'
})
export class RoutesComponent implements OnInit {

  source: string = '';
  destination: string = '';
  routes: any[] = [];

  constructor(
    private routeService: RouteService,
    private router: Router,
    public lang: LanguageService
  ) {}

  ngOnInit(): void {
    this.routes = this.routeService.routes;
  }

  search() {
    this.routes = this.routeService.search(this.source, this.destination);
  }

  bookRoute(route: any) {
    
    this.router.navigate(['/booking'], {
      queryParams: {
        source: route.source,
        destination: route.destination
      }
    });
  }
}

