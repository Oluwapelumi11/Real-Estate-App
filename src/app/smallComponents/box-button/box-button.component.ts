import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="[{'bg-gray-900 text-gray-100': dark},{'bg-white text-gray-900': white}]"  >{{title}}</button>
  `,
  styles: ``
})
export class BoxButtonComponent {
@Input() dark = true;
@Input() white = false;
@Input() title = "Button"

}
