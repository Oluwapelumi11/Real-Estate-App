import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './smallComponents/navbar/navbar.component';
import { FooterComponent } from './smallComponents/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Weston Real Estate';



  constructor(private route:Router){}
  scrollTo(divId: string){
    this.route.navigateByUrl(`#${divId}`)
    
  }
  
}
