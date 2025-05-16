import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface MedicalService {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
  featured?: boolean;
  details?: string[];
  time?: string;
  popularity?: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [ CommonModule]
})
export class ServicesComponent implements OnInit {
  services: MedicalService[] = [
    {
      id: 1,
      name: 'Konsultacja lekarza rodzinnego',
      description: 'Kompleksowa ocena stanu zdrowia pacjenta oraz ustalenie dalszego postępowania diagnostycznego i leczniczego.',
      price: 150,
      category: 'konsultacje',
      icon: 'fas fa-user-md',
      featured: true,
      details: ['Wywiad lekarski', 'Badanie fizykalne', 'Interpretacja wyników badań', 'Zalecenia dotyczące leczenia'],
      time: '30 minut',
      popularity: 95
    },
    {
      id: 2,
      name: 'USG jamy brzusznej',
      description: 'Nieinwazyjne badanie obrazowe pozwalające na ocenę narządów wewnętrznych jamy brzusznej.',
      price: 200,
      category: 'badania',
      icon: 'fas fa-wave-square',
      details: ['Ocena wątroby', 'Ocena trzustki', 'Ocena śledziony', 'Ocena nerek'],
      time: '25 minut',
      popularity: 80
    },
    {
      id: 3,
      name: 'EKG serca',
      description: 'Badanie funkcji elektrycznej serca, pozwalające wykryć zaburzenia rytmu i inne nieprawidłowości.',
      price: 100,
      category: 'badania',
      icon: 'fas fa-heartbeat',
      details: ['Pomiar aktywności elektrycznej serca', 'Wykrywanie zaburzeń rytmu', 'Ocena ukrwienia mięśnia sercowego'],
      time: '15 minut',
      popularity: 85
    },
    {
      id: 4,
      name: 'Szczepienie ochronne',
      description: 'Szczepienia przeciwko chorobom zakaźnym zgodnie z kalendarzem szczepień lub indywidualnymi potrzebami.',
      price: 120,
      category: 'zabiegi',
      icon: 'fas fa-syringe',
      featured: true,
      details: ['Kwalifikacja lekarska', 'Podanie szczepionki', 'Dokumentacja medyczna'],
      time: '20 minut',
      popularity: 75
    },
    {
      id: 5,
      name: 'Konsultacja kardiologiczna',
      description: 'Specjalistyczna ocena stanu układu krążenia przez doświadczonego kardiologa.',
      price: 250,
      category: 'konsultacje',
      icon: 'fas fa-heart',
      details: ['Szczegółowy wywiad kardiologiczny', 'Badanie fizykalne', 'Analiza EKG', 'Plan dalszego postępowania'],
      time: '40 minut',
      popularity: 90
    },
    {
      id: 6,
      name: 'Badanie krwi',
      description: 'Podstawowe lub rozszerzone badania laboratoryjne krwi pozwalające ocenić stan zdrowia.',
      price: 80,
      category: 'badania',
      icon: 'fas fa-vial',
      details: ['Morfologia', 'Badanie biochemiczne', 'Lipidogram', 'Próby wątrobowe'],
      time: '10 minut',
      popularity: 98
    },
    {
      id: 7,
      name: 'Fizjoterapia',
      description: 'Terapia manualna i ćwiczenia rehabilitacyjne dostosowane do indywidualnych potrzeb pacjenta.',
      price: 120,
      category: 'zabiegi',
      icon: 'fas fa-hand-holding-medical',
      details: ['Diagnoza fizjoterapeutyczna', 'Techniki manualne', 'Indywidualny plan ćwiczeń', 'Kinezyterapia'],
      time: '45 minut',
      popularity: 85
    },
    {
      id: 8,
      name: 'Dermatoskopia',
      description: 'Nieinwazyjne badanie zmian skórnych pod kątem wykrywania czerniaka i innych nowotworów skóry.',
      price: 150,
      category: 'badania',
      icon: 'fas fa-microscope',
      details: ['Ocena znamion skórnych', 'Diagnostyka różnicowa', 'Dokumentacja fotograficzna'],
      time: '20 minut',
      popularity: 70
    }
  ];
  displayedServices: MedicalService[] = [];
  selectedCategory = 'all';


  ngOnInit(): void {
    this.displayedServices = [...this.services];
  }

  filterServices(category: string): void {
    this.selectedCategory = category;
    
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const clickedButton = event?.target as HTMLElement;
    if (clickedButton) {
      clickedButton.classList.add('active');
    }
    
    if (category === 'all') {
      this.displayedServices = [...this.services];
    } else {
      this.displayedServices = this.services.filter(service => service.category === category);
    }
  }
  
  showServiceDetails(service: MedicalService): void {
    alert(`Wybrano usługę: ${service.name}\nCena: ${service.price} zł\nCzas: ${service.time || 'Nie określono'}\n\nDziękujemy za zainteresowanie. W pełnej wersji to okno zostanie zastąpione formularzem rezerwacji.`);
  }
  
  getCategoryDisplayName(category: string): string {
    switch(category) {
      case 'konsultacje': return 'Konsultacje lekarskie';
      case 'badania': return 'Badania diagnostyczne';
      case 'zabiegi': return 'Zabiegi medyczne';
      default: return 'Wszystkie usługi';
    }
  }
  
  getCategoryDescription(category: string): string {
    switch(category) {
      case 'konsultacje': 
        return 'Profesjonalne konsultacje lekarskie prowadzone przez doświadczonych specjalistów z różnych dziedzin medycyny.';
      case 'badania': 
        return 'Szeroki zakres badań diagnostycznych z wykorzystaniem nowoczesnego sprzętu medycznego.';
      case 'zabiegi': 
        return 'Zabiegi medyczne wykonywane przez wykwalifikowany personel w komfortowych i bezpiecznych warunkach.';
      default: 
        return '';
    }
  }
}
