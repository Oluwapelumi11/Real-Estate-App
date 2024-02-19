import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './smallComponents/property/property.component';
import { ContactComponent } from './smallComponents/contact/contact.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'properties',
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
