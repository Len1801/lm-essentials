import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang = new BehaviorSubject<string>(localStorage.getItem('lang') || 'en');
  currentLang$ = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {}

  switchLanguage(lang: 'en' | 'es'): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLang.next(lang);
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}
