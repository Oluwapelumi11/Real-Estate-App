import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Agent } from './agent';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private baseUrl ="https://estate-sage.vercel.app/api/agents"
  constructor(private http: HttpClient) { }
  private agentSubject$ = new BehaviorSubject<Agent[]>([]);

  private agents: Agent[] = [];
  agent$: Observable<Agent[]>= this.agentSubject$.asObservable();
  getAllAgents() {
    this.http.get<Agent[]>(this.baseUrl).pipe(
      tap((data:Agent[]) => {
        this.agentSubject$.next(data)
        this.agents = data; 
      }) 
      
    ).subscribe();
  }

  getAgentById(id: number): Agent | undefined {
    return this.agents.find(agent => agent.id === id);
  }


}
