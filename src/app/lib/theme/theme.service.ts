import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: string = '';
  public currentThemeChanged = new Subject<string>();

  constructor() {
    const savedTheme = localStorage.getItem('next-todo-theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
  }

  isThemeDark(): boolean {
    const savedTheme = localStorage.getItem('next-todo-theme');
    return savedTheme === 'light' && false;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('next-todo-theme', this.currentTheme);

    this.currentThemeChanged.next(this.currentTheme);
  }
}
