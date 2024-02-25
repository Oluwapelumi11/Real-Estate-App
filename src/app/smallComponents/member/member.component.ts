import { Component, Input } from '@angular/core';
import { Agent } from '../../agent';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full px-2 py-3 h-[440px]">
      <img [src]="agent.image" class="w-full h-[90%]" alt="">
      <div class="text-center py-3">
        <p class="uppercase font-semibold">{{agent.name}}</p>
        <div class="flex gap-5  ">
          <a [href]="agent.facebook">
            
          </a>
          <a [href]="agent.whatsapp">
            
            </a>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class MemberComponent {


@Input() agent: Agent = {
    id : 1,
    name : "John Doe",
    phone : "+1234567890",
    image : "agent1.jpg",
    email:"oluwapelumiezekiel1@gmail.com",
    facebook : "https://www.facebook.com/johndoe",
    x : "x123456789",
    whatsapp : "+1234567890"

}
}
