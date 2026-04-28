import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div class="lang-switcher">
      <button [class.active]="currentLang === 'en'" (click)="switch('en')">EN</button>
      <span class="sep">|</span>
      <button [class.active]="currentLang === 'es'" (click)="switch('es')">ES</button>
    </div>
  `,
  styles: [`
    .lang-switcher {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    button {
      background: none;
      border: none;
      color: var(--gray);
      font-family: var(--font-body);
      font-size: 11px;
      letter-spacing: 2px;
      cursor: pointer;
      padding: 2px 4px;
      transition: color 0.3s;
      &.active { color: var(--gold); font-weight: 500; }
      &:hover { color: var(--white); }
    }
    .sep { color: var(--gold-border); font-size: 12px; }
  `]
})
export class LanguageSwitcherComponent implements OnInit {
  currentLang = 'en';

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.currentLang$.subscribe(lang => this.currentLang = lang);
  }

  switch(lang: 'en' | 'es'): void {
    this.langService.switchLanguage(lang);
  }
}
