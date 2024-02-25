import { Component, Input } from '@angular/core';
import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  animations: [trigger('showunderline',[
    state('start',style({
      borderBottom: '1px solid black',
      borderOpacity: '0%'
    })),
    state('end',style({
      transform: '1px solid black',
      borderOpacity: '100%',
      
    })),
    transition('* => end',animate('300ms ease-in-out')),
    transition('* => start',animate('400ms ease-in-out')),
  ])],
  template: `
      <li><a routerLink="{{route}}" routerLinkActive="border-b border-gray-900" [routerLinkActiveOptions]="{exact: true }" [@showunderline]="state" (mouseenter)="setState('start')" (mouseleave)="setState('end')" class="">{{name}}</a></li>
  `,
  styles: ``
})
export class NavbarComponent {
  @Input() name: string = "Home"
  @Input() route: string = ""
  state = 'end'
  setState(value:string){
    this.state = value
  }
  navShown:boolean =true

  showNav(){
    this.navShown = !this.navShown
  }

  scrollTo(divID:string){
    const div = document.getElementById(divID);
    if (div){
      div.scrollIntoView({behavior:'smooth'})
    }
  }
  }