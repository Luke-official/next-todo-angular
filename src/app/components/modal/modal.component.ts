import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal/modal.service';
import { togglePageScroll } from 'src/utils/togglePageScroll';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  isModalOpen: boolean = false;

  constructor(
    private modalService: ModalService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.isModalOpen = modalService.isModalOpen;
    this.modalService.modalChanged.subscribe((status) => {
      this.isModalOpen = status;
    });
    this.matIconRegistry.addSvgIcon(
      'XMark',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/XMark.svg'
      )
    );
  }

  toggleModalOpen() {
    this.modalService.toggleModalOpen();
  }
}
