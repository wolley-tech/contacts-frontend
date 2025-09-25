import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Agent } from '../models/agent.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgentService {
  private base = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  register(agent: { name: string; phoneNumber: string }): Observable<Agent> {
    return this.http.post<Agent>(`${this.base}/contact-agents`, agent);
  }

  findByPhone(phoneNumber: string): Observable<Agent> {
    return this.http.get<Agent>(`${this.base}/contact-agents/phoneNumber/${phoneNumber}`);
  }
}
