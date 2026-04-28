import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  steps = [
    { num: '01', icon: '📋', key: 'quote' },
    { num: '02', icon: '📦', key: 'selection' },
    { num: '03', icon: '🚢', key: 'logistics' },
    { num: '04', icon: '✅', key: 'delivery' }
  ];
}
