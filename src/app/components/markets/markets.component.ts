import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  stats = [
    { target: 50, suffix: '+', key: 'countries' },
    { target: 4, suffix: '', key: 'continents' },
    { target: 6, suffix: '', key: 'categories' },
    { target: 100, suffix: '%', key: 'quality' }
  ];

  displayValues = [0, 0, 0, 0];

  regions = [
    { flag: '🌎', key: 'latam' },
    { flag: '🌍', key: 'europe' },
    { flag: '🌏', key: 'asia' },
    { flag: '🌐', key: 'north' }
  ];

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const el = document.getElementById('markets');
      if (el) observer.observe(el);
    }, 100);
  }

  animateCounters(): void {
    const duration = 1500;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      this.stats.forEach((stat, i) => {
        this.displayValues[i] = Math.round(ease * stat.target);
      });

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
}
