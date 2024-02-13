import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [],
  animations: [
    trigger('zoom',[
      state('enter',style({
        transform: 'scale(1)'
      })),
      state('leave',style({
        transform: 'scale(1.3)'
      })),
      transition('* => *',animate('500ms ease-in-out')),
    ])
  ],
  template: `
   <img [@zoom]="state" (mouseenter)="setState('leave')" (mouseleave)="setState(':enter')" class="w-full" [src]="src" alt="">
  `,
  styles: ``
})
export class HouseComponent {

@Input() src= "../../assets/img/office.jpg"
state ='enter'

setState(value:string){
  this.state=value
}

}
