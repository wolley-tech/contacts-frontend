import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({ providedIn: 'root' })
export class AgentGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}

  canActivate(): boolean {
    const key = this.storage.getAgentKey();
    if (key) return true;
    this.router.navigate(['/agent-lookup']);
    return false;
  }
}
