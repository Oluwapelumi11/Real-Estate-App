import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseComponent } from '../smallComponents/house/house.component';
import { PropertyComponent } from '../smallComponents/property/property.component';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [PropertyComponent, RouterModule,HouseComponent],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent {

}
