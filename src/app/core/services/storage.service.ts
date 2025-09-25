import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private AGENT_KEY = 'agentKey';

  setAgentKey(key: string) { localStorage.setItem(this.AGENT_KEY, key); }
  getAgentKey(): string | null { return localStorage.getItem(this.AGENT_KEY); }
  clearAgentKey() { localStorage.removeItem(this.AGENT_KEY); }
}
