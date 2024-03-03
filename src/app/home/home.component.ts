import { Component, OnInit } from '@angular/core';
import { BoxButtonComponent } from '../smallComponents/box-button/box-button.component';
import { HouseComponent } from '../smallComponents/house/house.component';
import { ButtonedCarouselComponent } from '../smallComponents/buttoned-carousel/buttoned-carousel.component';
import { BlogComponent } from '../smallComponents/blog/blog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxButtonComponent,HouseComponent,ButtonedCarouselComponent,BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  houses: any[] =[
    {
      image: "../../assets/img/skyscraper.jpg",
      title: "Living House"
    },
    {
      image: "../../assets/img/skyscraper.jpg", 
      title: "Living House"
    },
    {
      image: "../../assets/img/skyscraper.jpg",
      title: "Living House"
    },
    {
      image: "../../assets/img/skyscraper.jpg",
      title: "Living House"
    },
  ]

  constructor (private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment){
        const div = document.getElementById(fragment);
        if (div){
          div.scrollIntoView({behavior: 'smooth'})
        }
      }
    })
  }



  scrollTo(divID: string): void {
    const div = document.getElementById(divID);

    if (div){
      div.scrollIntoView({behavior: 'smooth'})
    }
  }

}
