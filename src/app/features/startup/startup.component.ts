import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';

@Component({ selector: 'app-startup', templateUrl: './startup.component.html' })
export class StartupComponent implements OnInit {
  constructor(private storage: StorageService, public router: Router) {}
  ngOnInit(): void {
    const key = this.storage.getAgentKey();
    if (key) this.router.navigate(['/contacts']); else this.router.navigate(['/agent-lookup']);
  }
}
