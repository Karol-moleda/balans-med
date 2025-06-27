import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MedicalService {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
  featured?: boolean;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [ CommonModule, RouterModule]
})
export class ServicesComponent implements OnInit {
  services: MedicalService[] = [
    {
      id: 1,
      name: 'Psychiatria dorosłych',
      description: 'Kompleksowa opieka psychiatryczna dla pacjentów dorosłych. Diagnoza, leczenie i monitorowanie zaburzeń psychicznych.',
      price: 200,
      category: 'psychiatria',
      icon: 'fas fa-brain',
    },
    {
      id: 2,
      name: 'Psychiatria dzieci i młodzieży',
      description: 'Specjalistyczna opieka psychiatryczna dostosowana do potrzeb dzieci i młodzieży.',
      price: 220,
      category: 'psychiatria',
      icon: 'fas fa-child',
    },
    {
      id: 3,
      name: 'Wizyta diagnostyczna psychologiczna',
      description: 'Kompleksowe badanie psychologiczne obejmujące różne aspekty funkcjonowania psychicznego.',
      price: 250,
      category: 'diagnostyka',
      icon: 'fas fa-clipboard-check',
    },
    {
      id: 4,
      name: 'Poradnictwo oraz wsparcie psychologiczne',
      description: 'Profesjonalne wsparcie psychologiczne w trudnych sytuacjach życiowych i kryzysach.',
      price: 150,
      category: 'wsparcie',
      icon: 'fas fa-hands-helping',
    },
    {
      id: 5,
      name: 'Psychoterapia dorosłych',
      description: 'Indywidualna psychoterapia dla dorosłych prowadzona przez doświadczonych psychoterapeutów.',
      price: 180,
      category: 'terapia',
      icon: 'fas fa-comments',
    }
  ];

  ngOnInit(): void {
    // Komponent gotowy do wyświetlenia wszystkich usług
  }
}
