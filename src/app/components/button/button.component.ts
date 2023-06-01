import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: any = 'button';
  @Input() class: string = 'button-primary';
  @Input() iconAsString: string = '';
}
