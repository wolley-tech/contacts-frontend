import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../core/services/contact.service';
import { Contact } from '../../core/models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  form = this.fb.group({
    id: [null as number | null],
    name: ['', [Validators.required, Validators.maxLength(255)]],
    gender: ['MALE', Validators.required],
    ageGroup: ['ADULT', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]]
  });

  isEdit = false;
  message: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private contactService: ContactService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id && id !== 'new') {
      this.isEdit = true;
      this.contactService.findById(+id).subscribe({
        next: contact => this.form.patchValue(contact as Partial<Contact>),
        error: () => (this.message = 'Erro ao carregar contato')
      });
    }
  }

  submit() {
    if (this.form.invalid) {
      this.message = 'Preencha os campos corretamente.';
      return;
    }

    // Garante que o payload seja tratado como Contact
    const payload = this.form.value as Contact;

    if (this.isEdit && payload.id != null) {
      this.contactService.update(payload.id, payload).subscribe({
        next: () => this.router.navigate(['/contacts']),
        error: () => (this.message = 'Erro ao salvar')
      });
    } else {
      this.contactService.create(payload).subscribe({
        next: () => this.router.navigate(['/contacts']),
        error: () => (this.message = 'Erro ao salvar')
      });
    }
  }
}
