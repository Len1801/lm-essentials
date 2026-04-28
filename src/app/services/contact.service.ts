import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  company: string;
  email: string;
  country: string;
  category: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
  // 1. Go to formspree.io and sign up free
  // 2. Create a new form → copy the ID (e.g. xpwzrqkb)
  // 3. Replace below: https://formspree.io/f/YOUR_FORMSPREE_ID
  private formspreeUrl = 'https://formspree.io/f/xdayqgen';

  constructor(private http: HttpClient) {}

  sendMessage(form: ContactForm): Observable<any> {
    return this.http.post(this.formspreeUrl, {
      name: form.name,
      company: form.company,
      email: form.email,
      country: form.country,
      category: form.category,
      message: form.message,
      _replyto: form.email,
      _subject: `New inquiry from ${form.name} — ${form.company}`
    });
  }
}
