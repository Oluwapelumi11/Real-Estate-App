import { Component } from '@angular/core';
import { BoxButtonComponent } from '../smallComponents/box-button/box-button.component';
import { HouseComponent } from '../smallComponents/house/house.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxButtonComponent,HouseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {











  

  houses: any[] =[
    {
      url: "../../assets/img/skyscraper.jpg",
      desc: "Living House"
    },
    {
      url: "../../assets/img/skyscraper.jpg",
      desc: "Living House"
    },
    {
      url: "../../assets/img/skyscraper.jpg",
      desc: "Living House"
    },
    {
      url: "../../assets/img/skyscraper.jpg",
      desc: "Living House"
    },

  ]
}
