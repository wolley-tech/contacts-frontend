import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { StartupComponent } from './features/startup/startup.component';
import { AgentLookupComponent } from './features/agent-lookup/agent-lookup.component';
import { AgentRegisterComponent } from './features/agent-register/agent-register.component';
import { ContactListComponent } from './features/contacts/contact-list.component';
import { ContactFormComponent } from './features/contacts/contact-form.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    AgentLookupComponent,
    AgentRegisterComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
