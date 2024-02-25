import { Component, Input, input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HouseComponent } from '../smallComponents/house/house.component';
import { PropertyComponent } from '../smallComponents/property/property.component';
import { Property } from '../house';
import { HouseService } from '../house.service';
import { DecimalPipe } from '@angular/common';
import { AgentService } from '../agent.service';
import { Agent } from '../agent';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [PropertyComponent, RouterModule,HouseComponent,DecimalPipe],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent {
   property: Property | undefined = {
    id : 1,
    images : [
        { id: 1, image: "image1.jpg" },
        { id: 2, image: "image2.jpg" },
        { id: 3, image: "image3.jpg" }
    ],
    title : "Beautiful House",
    property_category : "House",
    price : 250000,
    street : "123 Main St",
    city : "Example City",
    zip_code : "12345",
    property_type: "commercial",
    status : "For Sale",
    date_listed : "2022-02-20",
    plot_size : "5000 sqft",
    roof_type : "Shingle",
    construction_company : "ABC Construction",
    cooling : "Central Air",
    interior_size : "2000 sqft",
    bedroom : "3",
    bedroom_size : "Master: 15x20, Guest: 12x12, Kid's: 10x12",
    bathroom : "2.5",
    bathroom_size : "Master: Full, Guest: Full, Half: 1",
    garage : "Attached, 2 cars",
    laundry_room_equipment : "Washer, Dryer",
    living_room_size : "20x20",
    kitchen : "Granite countertops, Stainless steel appliances",
    featured : true,
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus velit ac ex lacinia, ut bibendum dolor fermentum. Duis luctus lacus id nunc accumsan interdum. Integer ut libero non neque sollicitudin vehicula. Sed at mauris quis purus fermentum facilisis.",
    owner : 123,
    days_on_site : 30
} 
agent : Agent |undefined;
  constructor(private route: ActivatedRoute, private propertyService: HouseService, private agentService: AgentService) { }
  selectedImage: string | undefined;
  ngOnInit() {
   this.route.paramMap.subscribe(params => {
    const propertyId = Number(params.get('id'));
    this.propertyService.getallProperties();// will remove this later to test
    this.propertyService.property$.subscribe((result) => {
      if (result && result.length > 0) {
        this.property = result.find(property => property.id === propertyId);
        this.selectedImage = this.property?.images[0]?.image
        this.agentService.getAllAgents();// will also removce this later to test
        this.agentService.agent$.subscribe((agent) => {
          if(agent && agent.length > 0){
            this.agent = agent.find((agent) => agent.id === this.property?.owner)
          }
        })
      }   
  })

  })}
  clickedImage :string | undefined;

  selectImage(index: number) {
    const clickedImage = this.property?.images[index]?.image;
    
    if (clickedImage !== undefined && this.property?.images[index]) {
      const tempImage = this.selectedImage;
      this.selectedImage = clickedImage;
      this.property.images[index].image = tempImage!;
    }
}
}
