import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PriceItem {
  service: string;
  price: string;
  description?: string;
}

interface PriceCategory {
  name: string;
  items: PriceItem[];
}

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent {
  priceCategories: PriceCategory[] = [
    {
      name: 'Konsultacje psychiatryczne',
      items: [
        { 
          service: 'Konsultacja psychiatryczna pierwszorazowa', 
          price: '350-400 zł', 
          description: '40 min (dorośli)' 
        },
        { 
          service: 'Konsultacja psychiatryczna kontrolna', 
          price: '280-320 zł', 
          description: '20 min (dorośli)' 
        },
        { 
          service: 'Konsultacja psychiatryczna pierwszorazowa', 
          price: '450 zł', 
          description: '60 min (dzieci)' 
        },
        { 
          service: 'Konsultacja psychiatryczna kolejna wizyta', 
          price: '380 zł', 
          description: '30 min (dzieci)' 
        },
        { 
          service: 'Wizyta recepturowa', 
          price: '100 zł', 
          description: '(stacjonarnie lub teleporada 10min)' 
        },
      ]
    },
    {
      name: 'Usługi psychologiczne',
      items: [
        { 
          service: 'Diagnoza/Opinia psychologiczna', 
          price: '300 zł', 
          description: '60 min (niezbędne 2-3 wizyty)' 
        },
        { 
          service: 'Omówienie diagnozy psychologicznej', 
          price: '100 zł', 
          description: '15 min' 
        },
        { 
          service: 'Wsparcie/poradnictwo psychologiczne', 
          price: '200-250 zł', 
          description: '50 min' 
        }
      ]
    },
    {
      name: 'Psychoterapia',
      items: [
        { 
          service: 'Sesja psychoterapii indywidualnej', 
          price: '180-230 zł', 
          description: '50 min' 
        }
      ]
    }
  ];
}
