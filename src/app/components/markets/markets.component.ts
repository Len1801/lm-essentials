// markets.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent {
  regions = [
    { flag: '🌎', key: 'latam' },
    { flag: '🌍', key: 'europe' },
    { flag: '🌏', key: 'asia' },
    { flag: '🌐', key: 'north' }
  ];

  dots = [
    { top: '40%', left: '25%', delay: '0s' },
    { top: '55%', left: '35%', delay: '.3s' },
    { top: '35%', left: '48%', delay: '.6s' },
    { top: '30%', left: '65%', delay: '.9s' },
    { top: '50%', left: '72%', delay: '1.2s' },
    { top: '25%', left: '20%', delay: '1.5s' },
    { top: '60%', left: '55%', delay: '.4s' }
  ];
}
