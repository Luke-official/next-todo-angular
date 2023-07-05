import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: any = 'text';
  @Input() class: string = 'button-primary';
  @Input() type: string = 'button';
  @Input() iconAsString: string = '';
  @Input() disabled: boolean = false;
}
