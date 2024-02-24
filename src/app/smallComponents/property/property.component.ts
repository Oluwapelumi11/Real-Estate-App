import { Component,Input, Pipe } from '@angular/core';
import { HouseComponent } from '../house/house.component';
import { Property } from '../../house';
import { CommonModule, DecimalPipe, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [HouseComponent,DecimalPipe,RouterModule],
  template: `
    <div class="h-fit shadow-md">
      <a routerLink="{{property.id}}">

        <div class="h-[90%] w-full overflow-hidden">
          <app-house [src]="property.images[0].image" />
        </div>
        <div class="text-base">
          <p class=" py-2 font-semibold">&#x20a6;{{property.price | number:'1.2-2'}}</p>
          <p class=" py-1 font-semibold">{{property.street}} {{property.city}} {{property.zip_code}}</p>
          <p class=" py-1 text-gray-500 uppercase">{{property.bedroom}} Beds | {{property.bathroom}} baths | {{property.interior_size}} sq.ft</p>
        </div>
      </a>
      </div>
  `,
  styles: ``
})
export class PropertyComponent {
@Input() property!:Property;

}
