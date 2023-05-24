import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
})
export class MenuDropdownComponent {
  @Input() dropdownItems: any[] = [];
  dropdownIsVisible: boolean = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'pencil',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Pencil.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'trash',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Trash.svg'
      )
    );
  }

  toggleVisibility = () => (this.dropdownIsVisible = !this.dropdownIsVisible);
}
