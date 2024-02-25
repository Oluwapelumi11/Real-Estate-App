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
   <img [@zoom]="state" (mouseenter)="setState('leave')" (mouseleave)="setState(':enter')" class="w-full h-full" src="{{src}}" alt="">
  `,
  styles: ``
})
export class HouseComponent {

@Input() src : string = "https://sunday-oluwapelumi.s3.amazonaws.com/Properties/Service-Oriented-Architecture.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVGDM7JXCRWIG4DLG%2F20240225%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240225T031100Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=20e7d4973191b2a5b80b6a1fb179d8f583117f2acffdc3e856d7477989179c06"

state ='enter'

setState(value:string){
  this.state=value
}

}
