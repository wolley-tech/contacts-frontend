import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgentService } from '../../core/services/agent.service';
import { StorageService } from '../../core/services/storage.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-agent-lookup', templateUrl: './agent-lookup.component.html' })
export class AgentLookupComponent {
  phone = new FormControl('');
  message: string | null = null;
  constructor(
    private agentService: AgentService, 
    private storage: StorageService, 
    public router: Router) {}
  search() {
    const digits = (this.phone.value || '').toString().replace(/\D/g, '');
    if (!/^\d{11}$/.test(digits)) { this.message = 'Informe um telefone válido com 11 dígitos.'; return; }
    this.agentService.findByPhone(digits).subscribe({ next: agent => { if (agent.agentKey) this.storage.setAgentKey(agent.agentKey); this.router.navigate(['/contacts']); }, error: () => this.message = 'Agente não cadastrado' });
  }
  goToRegister() { this.router.navigate(['/agent-register']); }
}
