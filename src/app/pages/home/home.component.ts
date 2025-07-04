import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
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
        'img/2.jpg',
      alt: 'Balans Med - Specjaliści',
      title: 'Doświadczeni specjaliści',
      description: 'Nasz zespół to wysoko wykwalifikowani lekarze z wieloletnim doświadczeniem klinicznym',
    },
    {
      image:
        'img/5.jpg',
      alt: 'Balans Med - Opieka',
      title: 'Profesjonalna opieka medyczna',
      description: 'Indywidualne podejście do każdego pacjenta i kompleksowa diagnostyka',
    },
    {
      image:
        'img/7.jpg',
      alt: 'Balans Med - Dostępność',
      title: 'Miejsce dostosowane do osób z niepełnosprawnością',
      description: 'Przestrzeń kliniki zaprojektowana z myślą o komforcie i dostępności dla wszystkich pacjentów',
    },
    {
      image:
        'img/9.jpg',
      alt: 'Balans Med - Gabinety',
      title: 'Nowoczesne, klimatyzowane gabinety',
      description: 'Komfortowe warunki i przyjazna atmosfera podczas każdej wizyty',
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
      description: 'Wizyta diagnostyczna psychologiczna (badanie osobowości, badanie funkcji poznawczych/przesiewowe neuropsychologiczne/do stopnia niepełnosprawności/renty-wydanie opinii).'
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

  ngAfterViewInit() {
    this.loadZnanyLekarzWidget();
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

  loadZnanyLekarzWidget() {
    // Use the exact script from the client
    if (!document.getElementById('zl-widget-s')) {
      const script = document.createElement('script');
      script.id = 'zl-widget-s';
      script.src = '//platform.docplanner.com/js/widget.js';
      const fjs = document.getElementsByTagName('script')[0];
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(script, fjs);
      } else {
        document.body.appendChild(script);
      }
    }
  }
}
