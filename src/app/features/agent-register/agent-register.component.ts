import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../../core/services/agent.service';
import { StorageService } from '../../core/services/storage.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-agent-register', templateUrl: './agent-register.component.html' })
export class AgentRegisterComponent {
  form = this.fb.group({ name: ['', Validators.required], phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]] });
  message: string | null = null;
  constructor(
    private fb: FormBuilder,
    private agentService: AgentService,
    private storage: StorageService,
    public router: Router) { }
  submit() {
    if (this.form.invalid) { this.message = 'Preencha os campos corretamente.'; return; }
    const payload = {
      name: this.form.value.name || '',
      phoneNumber: this.form.value.phoneNumber || ''
    };
    this.agentService.register(payload).subscribe({ next: agent => { if (agent.agentKey) this.storage.setAgentKey(agent.agentKey); this.router.navigate(['/contacts']); }, error: () => this.message = 'Erro ao registrar agente.' });
  }
}
