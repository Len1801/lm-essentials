import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  products = ['tech','electronics','nutrition','perfumes','beauty','vitamins'];
  company = ['about','markets','certifications','partners'];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
