import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  discount: string;
  discountText: string;
  mainOffer: string;
  offerSubtext: string;
  description: string;
  endDate: string;
  theme: 'autumn' | 'winter' | 'spring' | 'summer' | 'custom';
  specialists?: string[];
  specialistsDesc?: string;
  phoneNumber: string;
  onlineBookingUrl: string;
  ctaMessage: string;
  active: boolean;
}

@Component({
  selector: 'app-promotion-banner',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './promotion-banner.component.html',
  styleUrl: './promotion-banner.component.scss'
})
export class PromotionBannerComponent {
  @Input() promotion: Promotion | null = null;

  promotions: Promotion[] = [
    {
      id: 'autumn-2024',
      title: 'Zadbaj o siebie tej jesieni',
      subtitle: 'Jesień to doskonały moment, by zatroszczyć się o swoje samopoczucie 🍂',
      badge: '🍁 JESIENNA PROMOCJA 🍁',
      discount: '15%',
      discountText: 'ZNIŻKI',
      mainOffer: '3 pierwsze spotkania ze zniżką!',
      offerSubtext: 'Psycholodzy • Psychoterapeuci',
      description: 'Zapraszamy <strong>dzieci, młodzież i dorosłych</strong> — każdy znajdzie u nas przestrzeń do rozmowy, zrozumienia i wsparcia 💬💛',
      endDate: '7 listopada',
      theme: 'autumn',
      specialists: ['Milena', 'Dominika', 'Aleksandra'],
      specialistsDesc: 'Z empatią i profesjonalizmem pomogą Ci przejść przez trudniejsze momenty',
      phoneNumber: '+48889412421',
      onlineBookingUrl: 'https://www.znanylekarz.pl/placowki/balans-med',
      ctaMessage: 'Nie odkładaj troski o siebie na później — zrób pierwszy krok już dziś 🌿',
      active: true
    }
    // Dodaj tutaj kolejne promocje w przyszłości
    // {
    //   id: 'winter-2024',
    //   title: 'Zimowa promocja',
    //   badge: '❄️ ZIMOWA PROMOCJA ❄️',
    //   ...
    // }
  ];

  ngOnInit() {
    if (!this.promotion) {
      this.promotion = this.promotions.find(p => p.active) || null;
    }
  }

  getThemeClass(): string {
    return this.promotion ? `theme-${this.promotion.theme}` : '';
  }
}
