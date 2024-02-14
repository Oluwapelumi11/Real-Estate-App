import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttoned-carousel',
  standalone: true,
  imports: [],
  template: `
  <div class="relative w-fit h-fit">
    <img [src]="src" class="w-[100vw] h-[90vh]" />
    <div class="flex w-36 justify-between px-4 mx-7 z-20 absolute bottom-5 right-3">
      <button (click)="changeImage()" class="rounded-full border-2 border-white px-2 py-2 text-white">left</button>
      <button (click)="changeImage()" class="rounded-full border-2 border-white px-2 py-2 text-white">right</button>
    </div>
  </div>
  `,
  styles: ``
})
export class ButtonedCarouselComponent {
  @Input() src = "../../assets/img/house-pool.jpg"

  srcList= ["../../assets/img/house-pool.jpg","../../assets/img/night-gouse.jpg","../../assets/img/skyscraper.jpg","../../assets/img/house-pool.jpg"]
  f = this.srcList.length
  selected = 0;
changeImage(){
  
}

}
