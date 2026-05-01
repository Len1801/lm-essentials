import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    { title: 'about.features.reliability.title', desc: 'about.features.reliability.desc' },
    { title: 'about.features.agility.title', desc: 'about.features.agility.desc' },
    { title: 'about.features.variety.title', desc: 'about.features.variety.desc' },
    { title: 'about.features.support.title', desc: 'about.features.support.desc' }
  ];
}
