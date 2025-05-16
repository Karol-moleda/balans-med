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
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Balans Med - Recepcja',
      title: 'Witaj w Balans Med',
      description: 'Nowoczesna klinika, profesjonalna opieka medyczna dla całej rodziny',
    },
    {
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Balans Med - Gabinet',
      title: 'Kompleksowa opieka',
      description: 'Najnowsze technologie i doświadczeni specjaliści w jednym miejscu',
    },
    {
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Balans Med - Zespół',
      title: 'Zespół ekspertów',
      description: 'Nasi lekarze to specjaliści z wieloletnim doświadczeniem',
    },
  ];

  services = [
    {
      icon: 'medical_services',
      title: 'Medycyna rodzinna',
      description:
        'Kompleksowa opieka dla całej rodziny, od niemowląt po osoby starsze. Badania profilaktyczne, diagnostyka i leczenie.',
    },
    {
      icon: 'favorite',
      title: 'Kardiologia',
      description:
        'Specjalistyczne badania i konsultacje kardiologiczne. EKG, echo serca, testy wysiłkowe i holtery.',
    },
    {
      icon: 'fitness_center',
      title: 'Rehabilitacja',
      description:
        'Profesjonalna fizjoterapia i rehabilitacja. Indywidualne programy ćwiczeń dostosowane do potrzeb pacjenta.',
    },
    {
      icon: 'child_care',
      title: 'Pediatria',
      description:
        'Troskliwa opieka nad dziećmi w każdym wieku. Badania profilaktyczne, szczepienia i leczenie chorób dziecięcych.',
    },
    {
      icon: 'psychology',
      title: 'Neurologia',
      description:
        'Diagnostyka i leczenie chorób układu nerwowego. Konsultacje neurologiczne, EMG, EEG.',
    },
    {
      icon: 'woman',
      title: 'Ginekologia',
      description:
        'Kompleksowa opieka ginekologiczna. Badania profilaktyczne, USG, konsultacje specjalistyczne.',
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
    this.currentSlide = index;
    this.stopSlideShow();
    this.startSlideShow();
  }
}
