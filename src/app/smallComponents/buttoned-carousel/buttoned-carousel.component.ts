import { CommonModule } from '@angular/common';
import { OnDestroy, Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../slide';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-buttoned-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
  <div [@slideAnimation]="currentIndex" class="w-full h-full  relative carousel"  [ngStyle]="{'background-image':getCurrentSlideUrl()}">
    <div class=" absolute flex justify-between sm:px-8 px-3 text-4xl w-full z-10 items-center h-full" >
    <button class="text-white font-bold "  (click)="goToPrev()"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="110" fill="currentColor" class="bi bi-chevron-compact-left w-24 h-36" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
</svg></button>
    <button class="text-white font-bold " (click)="goToNext()"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="110" fill="currentColor" class="bi bi-chevron-compact-right w-24 h-36" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg></button>
    </div>
    <div *ngIf="src[currentIndex].title" class="w-full h-[10%] bg-white z-10 text-center font-semibold absolute bottom-0 text-xl bg-opacity-30 flex items-center text-white justify-center">{{src[currentIndex].title}}</div>
    <div class="w-full flex justify-center absolute top-5 space-x-4 gap-8"> 
    @for (dot of src; track $index) {
      
      <span  [@slideAnimation]="currentIndex" (click)="chooseIndex($index)" class="block w-2  h-2 rounded-full bg-white z-20 " [ngClass]="{'ring-white ring-4':$index===currentIndex}"></span>
    }

    </div>
  </div>
`,
styles: `
.carousel{
  background-repeat: no-repeat;
    background-position: center;
    background-size:cover
}
`,
animations: [
  trigger('slideAnimation', [
    transition(':increment', [
      style({ transform: 'translateX(100%)' }),
      animate('200ms', style({ transform: 'translateX(0)' }))
    ]),
    transition(':decrement', [
      style({ transform: 'translateX(-100%)' }),
      animate('200ms', style({ transform: 'translateX(0)' }))
    ])
  ])
]

})
export class ButtonedCarouselComponent implements OnInit, OnDestroy {
  @Input() src : Slide[]= [
    {image:"/assets/img/house-pool.jpg",title: ""},
    {image:"/assets/img/night-gouse.jpg",title: ""},
    {image:"/assets/img/skyscraper.jpg",title: ""},
    {image:"/assets/img/house-pool.jpg",title: ""}
  ]  
  currentIndex :number = 0;
  autoScrollInterval: any;


  chooseIndex(index:number){
    this.currentIndex = index;
  }

  getCurrentSlideUrl(){
    return `url('${this.src[this.currentIndex].image}')`;
  }
  goToPrev(){
    const isfirstSlide = this.currentIndex === 0;
    const newSlide = isfirstSlide ? this.src.length-1 : this.currentIndex - 1;
    this.currentIndex = newSlide;
  }

  goToNext(){
    const islastSlide = this.currentIndex == this.src.length-1;
    const newSlide = islastSlide ? 0  : this.currentIndex + 1;
    this.currentIndex  = newSlide; 
  }

ngOnInit(): void {
  this.startAutoScroll();
}
  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
        this.goToNext();
    }, 3000); 
}

stopAutoScroll() {
    clearInterval(this.autoScrollInterval);
}

ngOnDestroy(): void {
  this.stopAutoScroll();
}

}

