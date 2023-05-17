import { Component } from '@angular/core';
import { ThemeService } from './lib/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeService],
})
export class AppComponent {
  title: string = '';
  currentTheme: string = '';

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.currentTheme;
    this.themeService.currentThemeChanged.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
