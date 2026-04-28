import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  reasons = [
    { icon: '🌍', key: 'global' },
    { icon: '⚡', key: 'fast' },
    { icon: '🏆', key: 'quality' },
    { icon: '🔒', key: 'secure' },
    { icon: '📞', key: 'support' },
    { icon: '💼', key: 'experience' }
  ];
}
