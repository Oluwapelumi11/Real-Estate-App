import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './smallComponents/property/property.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertListingsComponent } from './propert-listings/propert-listings.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'properties',
        component: PropertListingsComponent
    },
    {
        path: 'properties/:id',
        component: PropertyDetailsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    // {
    //     path: '**',
    //     // component: 
    // }
];
