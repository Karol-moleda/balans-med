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
      name: 'Konsultacje',
      items: [
        { service: 'Konsultacja fizjoterapeutyczna', price: '150 zł', description: 'Obejmuje wywiad i badanie' },
        { service: 'Konsultacja kontrolna', price: '100 zł' },
        { service: 'Terapia manualna', price: '150-200 zł' }
      ]
    },
    {
      name: 'Masaże',
      items: [
        { service: 'Masaż klasyczny (60 min)', price: '150 zł' },
        { service: 'Masaż leczniczy (45 min)', price: '130 zł' },
        { service: 'Masaż sportowy (60 min)', price: '170 zł' }
      ]
    },
    {
      name: 'Rehabilitacja',
      items: [
        { service: 'Indywidualna sesja rehabilitacyjna (60 min)', price: '180 zł' },
        { service: 'Fizjoterapia uroginekologiczna', price: '200 zł' },
        { service: 'Terapia powięziowa', price: '160 zł' }
      ]
    }
  ];
}
