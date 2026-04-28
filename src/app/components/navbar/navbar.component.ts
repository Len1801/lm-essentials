import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}
