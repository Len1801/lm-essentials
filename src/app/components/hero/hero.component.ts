import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  stats = [
    { num: '50+', label: 'hero.stats.countries' },
    { num: '7', label: 'hero.stats.categories' },
    { num: '100%', label: 'hero.stats.quality' }
  ];

  ngOnInit(): void {}

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
