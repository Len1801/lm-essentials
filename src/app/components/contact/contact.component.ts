import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  loading = false;
  success = false;

  categories = ['tech', 'electronics', 'nutrition', 'perfumes', 'beauty', 'vitamins', 'multiple'];

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.form = this.fb.group({
      name:     ['', [Validators.required, Validators.minLength(2)]],
      company:  ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      country:  ['', Validators.required],
      category: ['', Validators.required],
      message:  ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    this.loading = true;
    this.contactService.sendMessage(this.form.value).subscribe({
      next: () => { this.success = true; this.loading = false; this.form.reset(); this.submitted = false; },
      error: () => { this.loading = false; }
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted));
  }
}
