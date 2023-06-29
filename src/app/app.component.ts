import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';


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
    //Get current localStorage theme
    this.currentTheme = this.themeService.currentTheme;

    //Subscribe to themeService subject to get updated theme
    this.themeService.currentThemeChanged.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
