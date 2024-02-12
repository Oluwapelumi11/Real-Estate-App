import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './smallComponents/property/property.component';
import { ContactComponent } from './smallComponents/contact/contact.component';

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
        component: PropertyComponent
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
