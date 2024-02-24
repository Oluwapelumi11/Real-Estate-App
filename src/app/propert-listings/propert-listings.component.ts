import { Component, inject,OnInit,OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropertyComponent } from '../smallComponents/property/property.component';
import { HouseService } from '../house.service';
import { Property } from '../house';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-propert-listings',
  standalone: true,
  imports: [RouterModule,PropertyComponent],
  templateUrl: './propert-listings.component.html',
  styleUrl: './propert-listings.component.css'
})
export class PropertListingsComponent implements OnInit  {
 
  property: Property[] = []

  constructor(private propertyService: HouseService){}


  ngOnInit(){
    this.propertyService.getallProperties();
    this.propertyService.property$.subscribe((result) => {
      this.property = result
  
    }) 
  }

  
}
