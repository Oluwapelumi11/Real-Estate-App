import { Component } from '@angular/core';
import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  // animations: [trigger('showunderline',[
  //   state('start',style({
  //     borderBottom: '1px solid black',
  //     borderOpacity: '0%'
  //   })),
  //   state('end',style({
  //     borderBottom: '1px solid black',
  //     borderOpacity: '100%'
  //   })),
  //   transition('start => end',animate('500ms ease-in-out')),
  //   transition('end => start',animate('700ms ease-in-out')),
  // ])],
  template: `
  
      <ul class="w-1/2  fixed py-3  right-0 flex justify-end px-5 mx-10">
    
        <a href="" [routerLink]="['']"  routerLinkActive="border-b"   class=" mx-5 px-2 w-1/10 hover:border-b border-gray-900 "><li>Home</li></a>
        <a href="" [routerLink]="['about']" routerLinkActive="border-b"   class=" mx-5 px-2 w-1/10 hover:border-b border-gray-900 "><li>About</li></a>
        <a href="" [routerLink]="['properties']" routerLinkActive="border-b"   class=" mx-5 px-2 w-1/10 hover:border-b border-gray-900 "><li>Properties</li></a>
        <a href="" [routerLink]="['contact']" routerLinkActive="border-b"   class=" mx-5 px-2 w-1/10 hover:border-b border-gray-900 "><li>Contact</li></a>
      </ul>
    
  `,
  styles: ``
})
export class NavbarComponent {
  // state = 'start'
  // setState(value:string){
  //   this.state = value
  }