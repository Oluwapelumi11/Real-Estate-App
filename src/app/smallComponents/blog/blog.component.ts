import { Component, Input } from '@angular/core';
import { HouseComponent } from '../house/house.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HouseComponent],
  template: `
   <div class="flex flex-col justify-between items-center p-3 bg-white shadow-lg w-full">
    <div class="w-full overflow-hidden">
      <app-house [src]="blog.imageUrl" />
    </div>
    <p class="mx-auto px-5 text-center uppercase font-semibold text-xl py-4">{{blog.title}}</p>
    <p class=" text-center text-sm py-4">{{blog.description}}</p>
    <button class="border-2 border-gray-700 px-5 py-2 uppercase w-fit">Read More</button>
   </div>
  `,
  styles: ``
})
export class BlogComponent {
@Input() blog : any ={
  title: "Luxury Real Estate market Comparison in Los Angeles",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et consequatur porro totam, recusandae praesentium quo excepturi vero eos, necessitatibus nisi distinctio a nam commodi. Quos est enim fugiat neque!",
  link : "",
  imageUrl: "../../assets/img/apart.jpg",
}
}
