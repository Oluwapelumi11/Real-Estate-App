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
  

    <ul class="sm:w-1/2  bg-white sm:bg-transparent flex-col items-center sm:items-start sm:flex-row  fixed py-3 z-10  right-0 flex justify-center  sm:justify-end px-5 mx-10">
      <button class="absolute top-4 right-4" (click)="showNav()">clickme</button>
        <a href="" [routerLink]="['']"  routerLinkActive="border-b" [routerLinkActiveOptions]="{ exact: true }"   class=" mx-5 px-2  sm:w-1/10 hover:border-b border-gray-900 "><li>Home</li></a>
        <a href="" [routerLink]="['about']" routerLinkActive="border-b"   class=" mx-5 px-2 w-full sm:w-1/10 hover:border-b border-gray-900 "><li>About</li></a>
        <a href="" [routerLink]="['properties']" routerLinkActive="border-b"   class=" mx-5 px-2 w-full sm:w-1/10 hover:border-b border-gray-900 "><li>Properties</li></a>
        <a href=""   class=" mx-5 px-2  sm:w-1/10 hover:border-b  border-gray-900 "><li>Contact</li></a>
      </ul>
      
    
  `,
  styles: ``
})
export class NavbarComponent {
  // state = 'start'
  // setState(value:string){
  //   this.state = value

  navShown:boolean =true

  showNav(){
    this.navShown = !this.navShown
  }
  }