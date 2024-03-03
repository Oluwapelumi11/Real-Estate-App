import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../slide';

@Component({
  selector: 'app-buttoned-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
  <div class="w-full h-full p-3  relative">
    <div class=" absolute flex justify-between px-8 text-4xl w-full z-10 items-center h-full" >
    <button  (click)="goToPrev()"><</button>
    <button  (click)="goToNext()">></button>
    </div>
    <div class="w-full h-full absolute top-0 carousel " [ngStyle]="{'background-image':getCurrentSlideUrl()}" ></div>

  </div>
`,
styles: `
.carousel{
  background-repeat: no-repeat;
    background-position: center;
    background-size:contain
}
`
})
export class ButtonedCarouselComponent {
  @Input() src : Slide[]= [
    {image:"/assets/img/house-pool.jpg",title: "Living House"},
    {image:"/assets/img/night-gouse.jpg",title: "Living House"},
    {image:"/assets/img/skyscraper.jpg",title: "Living House"},
    {image:"/assets/img/house-pool.jpg",title: "Living House"}
  ]  
  currentIndex :number = 0;
  
  getCurrentSlideUrl(){
    return `url('${this.src[this.currentIndex].image}')`;
  }
  goToPrev(){
    const isfirstSlide = this.currentIndex === 0;
    const newSlide = isfirstSlide ? this.src.length-1 : this.currentIndex - 1;
    this.currentIndex = newSlide;
  }

  goToNext(){
    const islastSlide = this.currentIndex == this.src.length;
    const newSlide = islastSlide ? 0  : this.currentIndex + 1;
    this.currentIndex  = newSlide; 
  }




}

