import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Anna Kowalska',
      specialty: 'Kardiologia',
      description: 'Specjalista z wieloletnim doświadczeniem w diagnozowaniu i leczeniu chorób serca.',
      image: 'https://placehold.co/300x400/2a7d8c/white?text=Dr.+Kowalska'
    },
    {
      id: 2,
      name: 'Dr. Jan Nowak',
      specialty: 'Neurologia',
      description: 'Ekspert w zakresie chorób układu nerwowego z 15-letnim doświadczeniem klinicznym.',
      image: 'https://placehold.co/300x400/2a7d8c/white?text=Dr.+Nowak'
    },
    {
      id: 3,
      name: 'Dr. Marta Wiśniewska',
      specialty: 'Dermatologia',
      description: 'Specjalistka dermatologii estetycznej i leczniczej, absolwentka prestiżowych szkoleń.',
      image: 'https://placehold.co/300x400/2a7d8c/white?text=Dr.+Wisniewska'
    },
    {
      id: 4,
      name: 'Dr. Piotr Zieliński',
      specialty: 'Ortopedia',
      description: 'Ortopeda specjalizujący się w leczeniu urazów sportowych i zabiegach małoinwazyjnych.',
      image: 'https://placehold.co/300x400/2a7d8c/white?text=Dr.+Zielinski'
    }
  ];
}
