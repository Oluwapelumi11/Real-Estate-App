import { Component, inject,OnInit,OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropertyComponent } from '../smallComponents/property/property.component';
import { HouseService } from '../house.service';
import { Property } from '../house';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-propert-listings',
  standalone: true,
  imports: [RouterModule,PropertyComponent],
  templateUrl: './propert-listings.component.html',
  styleUrl: './propert-listings.component.css'
})
export class PropertListingsComponent implements OnInit,OnDestroy  {
 
  property: Property[] = []
  propertySubscription!: Subscription;
  constructor(private propertyService: HouseService){}

    ngOnDestroy(): void {
      if (this.propertySubscription) {
        this.propertySubscription.unsubscribe();
      }
    }
  
  ngOnInit(){
    this.propertyService.getallProperties();
    this.propertySubscription = this.propertyService.property$.subscribe((result) => {
      this.property = result
  
    }) 
  }

  
}
