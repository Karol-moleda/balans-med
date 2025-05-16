import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
    {
    path: 'doctors',
    loadComponent: () => import('./pages/doctors/doctors.component').then(m => m.DoctorsComponent)
  },
      {
    path: 'price-list',
    loadComponent: () => import('./pages/price-list/price-list.component').then(m => m.PriceListComponent)
  },
  { path: '**', redirectTo: '' }
];
