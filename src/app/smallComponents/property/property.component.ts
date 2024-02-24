import { Component } from '@angular/core';
import { HouseComponent } from '../house/house.component';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [HouseComponent],
  template: `
    <div class="h-[275px]">
            <div class="h-[90%] w-full overflow-hidden">
                <app-house [src]="'../../assets/img/home.jpg'" />
            </div>
            <div class="text-base">
                <p class=" py-2 font-semibold">$12,750,000</p>
                <p class=" py-1 font-semibold">20724 Visa Court,London, CA 95476</p>
                <p class=" py-1 text-gray-500 uppercase">4 Beds | 5 baths | 5,776 sq.ft</p>
            </div>
        </div>
  `,
  styles: ``
})
export class PropertyComponent {

}
