import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../shared/pipes/safe.pipe';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, SafePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
})
export class ContactComponent {
  clinicInfo = {
    name: 'Przychodnia Balans-Med',
    address: {
      street: 'ul.Przemiarki 23/10',
      city: 'Kraków',
      zipCode: '30-348',
    },
    contact: {
      phone: '+48 889 412 421',
      email: 'balansmed.rejestracja@gmail.com',
    },
    hours: [
      { day: 'Poniedziałek - Piątek', hours: '15:00 - 20:00' },
      { day: 'Sobota', hours: '9:00 - 14:00' },
      { day: 'Niedziela', hours: 'Zamknięte' },
    ],
    reservation: {
      online: 'Przejdź do rezerwacji na zananym lekarzu',
      phone: 'Telefonicznie: +48 889 412 421',
    },
    mapLocation:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1854!2d19.9373!3d50.0619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0f0d0f0f0f%3A0x0!2sUl.%20Przemiarki%2023%2F10%2C%2030-348%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1631890000000!5m2!1spl!2spl',
  };
}
