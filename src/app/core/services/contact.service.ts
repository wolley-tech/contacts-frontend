import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private base = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  list(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.base}/contacts`);
  }
  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.base}/contacts`, contact);
  }
  update(id: number, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.base}/contacts/${id}`, contact);
  }
  findById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.base}/contacts/${id}`);
  }
}
