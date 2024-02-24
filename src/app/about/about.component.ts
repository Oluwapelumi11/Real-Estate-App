import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MemberComponent } from '../smallComponents/member/member.component';
import { AgentService } from '../agent.service';
import { Agent } from '../agent';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MemberComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  agent!: Agent[];

  constructor(private agentService: AgentService ){}
  ngOnInit(){
    this.agentService.getAllAgents();
    this.agentService.agent$.subscribe((result) => {
      this.agent = result
  
    }) 
  }
}
