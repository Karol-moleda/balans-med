import { Component, OnInit, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    NgFor,
    NgIf,
    MatIconModule,
  ],
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: '/', label: 'Strona główna' },
    { path: '/services', label: 'Nasze Usługi' },
    { path: '/doctors', label: 'Lekarze' },
    { path: '/price-list', label: 'Cennik' },
    { path: '/gallery', label: 'Galeria' },
    { path: '/contact', label: 'Kontakt' },
  ];
  
  isMobile = false;
  isMenuOpen = false;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }
  @HostListener('window:resize')
  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.isMenuOpen = false;
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
