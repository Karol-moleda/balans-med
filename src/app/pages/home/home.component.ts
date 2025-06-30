import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      image:
        'img/1.jpg',
      alt: 'Balans Med - Recepcja',
      title: 'Witaj w Balans Med',
      description: 'Nowoczesna klinika, profesjonalna opieka medyczna dla całej rodziny',
    },
    {
      image:
        'img/8.jpg',
      alt: 'Balans Med - Gabinet',
      title: 'Kompleksowa opieka',
      description: 'Najnowsze technologie i doświadczeni specjaliści w jednym miejscu',
    },
    {
      image:
        'img/3.jpg',
      alt: 'Balans Med - Zespół',
      title: 'Zespół ekspertów',
      description: 'Nasi lekarze to specjaliści z wieloletnim doświadczeniem',
    },
  ];

  services = [
    {
      icon: 'psychology',
      title: 'Psychiatria dorosłych',
      description: 'Kompleksowa opieka psychiatryczna dla osób dorosłych. Diagnostyka, leczenie farmakologiczne i psychoterapia zaburzeń psychicznych.'
    },
    {
      icon: 'child_friendly',
      title: 'Psychiatria dzieci i młodzieży',
      description: 'Specjalistyczna opieka psychiatryczna dostosowana do potrzeb najmłodszych pacjentów i nastolatków.'
    },
    {
      icon: 'assessment',
      title: 'Wizyta diagnostyczna psychologiczna',
      description: 'Profesjonalne badania psychologiczne: ocena osobowości, funkcji poznawczych, wydawanie opinii do celów prawnych.'
    },
    {
      icon: 'support',
      title: 'Poradnictwo oraz wsparcie psychologiczne',
      description: 'Indywidualne konsultacje psychologiczne, wsparcie w trudnych sytuacjach życiowych i kryzysach emocjonalnych.'
    },
    {
      icon: 'healing',
      title: 'Psychoterapia dorosłych',
      description: 'Różnorodne formy psychoterapii dostosowane do indywidualnych potrzeb pacjenta i specyfiki problemu.'
    },
  ];
  currentSlide = 0;
  slideInterval: any;

  constructor() {}

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  setCurrentSlide(index: number) {
    this.stopSlideShow(); // Stop the automatic slideshow when user interacts
    this.currentSlide = index;
    this.startSlideShow(); // Restart the slideshow after user selection
  }
}
