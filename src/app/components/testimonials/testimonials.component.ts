import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'Carlos Mendoza', role: 'CEO, TechDistrib México', initials: 'CM', stars: 5,
      quote: 'LM Essentials has been our trusted technology export partner for over 2 years. Their logistics are impeccable and the product quality is always top-notch.' },
    { name: 'Sophie Laurent', role: 'Import Manager, EuroBeauty France', initials: 'SL', stars: 5,
      quote: 'We import beauty and fragrance products through LM Essentials. The process is seamless, communication is excellent and delivery times are always met.' },
    { name: 'Ricardo Oliveira', role: 'Director, NutriSport Brasil', initials: 'RO', stars: 5,
      quote: 'The protein and nutrition products we source through LM Essentials are certified and always arrive in perfect condition. Highly recommended partner.' }
  ];
}
