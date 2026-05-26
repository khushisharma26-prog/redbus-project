import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

@Component({
  standalone: true,
  selector: 'app-map',
  imports: [CommonModule],
  templateUrl: './map.html'
})
export class MapComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const map = L.map('map').setView([28.6139, 77.2090], 6); // India center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

   
    L.marker([28.6139, 77.2090]).addTo(map).bindPopup('Delhi');
    L.marker([26.9124, 75.7873]).addTo(map).bindPopup('Jaipur');
    L.marker([19.0760, 72.8777]).addTo(map).bindPopup('Mumbai');
  }
}
