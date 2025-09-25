import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storage: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers.set('X-API-KEY', environment.apiKey || 'local-dev-key');
    const agentKey = this.storage.getAgentKey();
    if (agentKey) headers = headers.set('X-agent-key', agentKey);
    const clone = req.clone({ headers });
    return next.handle(clone);
  }
}
