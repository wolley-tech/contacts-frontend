import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupComponent } from './features/startup/startup.component';
import { AgentLookupComponent } from './features/agent-lookup/agent-lookup.component';
import { AgentRegisterComponent } from './features/agent-register/agent-register.component';
import { ContactListComponent } from './features/contacts/contact-list.component';
import { ContactFormComponent } from './features/contacts/contact-form.component';
import { AgentGuard } from './core/guards/agent.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'startup' },
  { path: 'startup', component: StartupComponent },
  { path: 'agent-lookup', component: AgentLookupComponent },
  { path: 'agent-register', component: AgentRegisterComponent },
  { path: 'contacts', component: ContactListComponent, canActivate: [AgentGuard] },
  { path: 'contacts/new', component: ContactFormComponent, canActivate: [AgentGuard] },
  { path: 'contacts/:id/edit', component: ContactFormComponent, canActivate: [AgentGuard] },
  { path: '**', redirectTo: 'startup' }
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
