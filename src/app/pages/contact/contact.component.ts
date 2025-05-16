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
      street: 'ul. Przykładowa 123',
      city: 'Warszawa',
      zipCode: '00-123',
    },
    contact: {
      phone: '+48 123 456 789',
      email: 'kontakt@balans-med.pl',
    },
    hours: [
      { day: 'Poniedziałek - Piątek', hours: '8:00 - 20:00' },
      { day: 'Sobota', hours: '9:00 - 14:00' },
      { day: 'Niedziela', hours: 'Zamknięte' },
    ],
    reservation: {
      online: 'www.balans-med.pl/rezerwacja',
      phone: 'Telefonicznie: +48 123 456 789',
    },
    mapLocation:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438422066!2d20.896112694544105!3d52.233033049235684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1649144610000!5m2!1spl!2spl',
  };
}
