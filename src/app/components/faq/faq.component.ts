import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    { key: 'q1', open: false },
    { key: 'q2', open: false },
    { key: 'q3', open: false },
    { key: 'q4', open: false },
    { key: 'q5', open: false },
    { key: 'q6', open: false }
  ];

  toggle(faq: any): void {
    faq.open = !faq.open;
  }
}
