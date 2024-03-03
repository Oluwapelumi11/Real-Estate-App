import { CommonModule } from '@angular/common';
import { Component,OnInit,OnDestroy } from '@angular/core';
import { MemberComponent } from '../smallComponents/member/member.component';
import { AgentService } from '../agent.service';
import { Agent } from '../agent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MemberComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit,OnDestroy {
  agent!: Agent[];
  agentsub!: Subscription;
  constructor(private agentService: AgentService ){}
  ngOnInit(){
    this.agentService.getAllAgents();
    this.agentsub = this.agentService.agent$.subscribe((result) => {
      this.agent = result
  
    }) 
  }

  ngOnDestroy(): void {
    if (this.agentsub){
      this.agentsub.unsubscribe();
    }
  }
}
