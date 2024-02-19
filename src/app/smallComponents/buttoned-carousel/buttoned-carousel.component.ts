import { Component, Input, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig,NguCarouselDefDirective,NguCarouselNextDirective,NguCarouselPrevDirective,NguCarouselStore, NguItemComponent, NguTileComponent } from '@ngu/carousel';

@Component({
  selector: 'app-buttoned-carousel',
  standalone: true,
  imports: [
    NguCarousel,
  NguTileComponent,   
  NguCarousel,
  NguCarouselDefDirective,
  NguCarouselNextDirective,
  NguCarouselPrevDirective,
  NguItemComponent,

  ],
  template: `
  <ngu-carousel [inputs]="carouselConfig">
  @for (banner of src; track $index) {

    <ngu-item >
      <img [src]="banner" alt="">
    </ngu-item>
  }
</ngu-carousel>
`,
styles: []
})
export class ButtonedCarouselComponent implements OnInit {
  @Input() src = ["../../assets/img/house-pool.jpg","../../assets/img/night-gouse.jpg","../../assets/img/skyscraper.jpg","../../assets/img/house-pool.jpg"]
  carouselConfig :any ={}
  
  constructor() { }
  
  ngOnInit(): void {
    this.carouselConfig= {
     grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
     slide: 1,
     speed: 400,
     interval: { timing: 3000 },
     point: {
       visible: true
     },
     load: 2,
     loop: true,
     touch: true
   };
  }
    
  

}