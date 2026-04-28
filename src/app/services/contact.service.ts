import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
  constructor(private http: HttpClient) {}

  sendMessage(form: ContactForm): Observable<{ success: boolean }> {
    // Replace with your real API endpoint or EmailJS/Formspree integration
    // Example with Formspree: return this.http.post<any>('https://formspree.io/f/YOUR_ID', form);
    console.log('Form submitted:', form);
    return of({ success: true }).pipe(delay(1000));
  }
}
