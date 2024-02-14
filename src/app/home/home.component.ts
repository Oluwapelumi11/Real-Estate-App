import { Component } from '@angular/core';
import { BoxButtonComponent } from '../smallComponents/box-button/box-button.component';
import { HouseComponent } from '../smallComponents/house/house.component';
import { ButtonedCarouselComponent } from '../smallComponents/buttoned-carousel/buttoned-carousel.component';
import { BlogComponent } from '../smallComponents/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxButtonComponent,HouseComponent,ButtonedCarouselComponent,BlogComponent],
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
