import { Component, OnInit } from '@angular/core';
import { BoxButtonComponent } from '../smallComponents/box-button/box-button.component';
import { HouseComponent } from '../smallComponents/house/house.component';
import { ButtonedCarouselComponent } from '../smallComponents/buttoned-carousel/buttoned-carousel.component';
import { BlogComponent } from '../smallComponents/blog/blog.component';
import { ActivatedRoute } from '@angular/router';
import { Slide } from '../slide';

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
      image: "../../assets/img/home.jpg",
      title: "Living House"
    },
    {
      image: "../../assets/img/home1.jpeg", 
      title: "House Villa"
    },
    {
      image: "../../assets/img/home3.jpeg",
      title: "House Apartment"
    },
    {
      image: "../../assets/img/home4.jpeg",
      title: "Office Floors"
    },
  ]

  places : Slide[] =[
    {image:"../../assets/img/home2.jpeg",title: "Greenville"},
    {image:"../../assets/img/home5.jpeg",title: "Newcastle"},
    {image:"../../assets/img/house-pool.jpg",title: "Greenville"},
    {image:"../../assets/img/beach-house.jpg",title: "Kansas"},
    {image:"../../assets/img/apart.jpg",title: "Lagos"},
    {image:"../../assets/img/house-bush.jpg",title: "Denver"},
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
