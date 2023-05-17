import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ThemeService } from 'src/app/lib/theme/theme.service';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss'],
})
export class SwitchThemeComponent {
  currentTheme: string = '';

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.currentTheme;
    this.themeService.currentThemeChanged.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  isThemeDark() {
    return this.currentTheme === 'light' ? false : true;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
