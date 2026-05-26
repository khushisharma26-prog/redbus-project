import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'redbus-theme';
  isDarkMode = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem(this.themeKey, 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem(this.themeKey, 'light');
    }
  }

  loadTheme(): void {
    const theme = localStorage.getItem(this.themeKey);
    this.isDarkMode = theme === 'dark';

    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    }
  }
}
