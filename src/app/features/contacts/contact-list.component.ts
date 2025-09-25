import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../core/services/contact.service';
import { Contact } from '../../core/models/contact.model';
import { Router } from '@angular/router';

@Component({ selector: 'app-contact-list', templateUrl: './contact-list.component.html' })
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  message: string | null = null;
  constructor(
    private contactService: ContactService, 
    public router: Router) {}
  ngOnInit(): void { this.load(); }
  load() { this.contactService.list().subscribe({ next: list => this.contacts = list, error: () => this.message = 'Erro ao carregar lista' }); }
  newContact() { this.router.navigate(['/contacts/new']); }
  editContact(id?: number) { if (id) this.router.navigate([`/contacts/${id}/edit`]); }
}
