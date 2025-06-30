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
  {
    path: 'standardy-ochrony',
    loadComponent: () => import('./pages/standardy-ochrony/standardy-ochrony.component').then(m => m.StandardyOchronyComponent)
  },
  {
    path: 'regulamin',
    loadComponent: () => import('./pages/regulamin/regulamin.component').then(m => m.RegulaminComponent)
  },
  {
    path: 'polityka-prywatnosci',
    loadComponent: () => import('./pages/polityka-prywatnosci/polityka-prywatnosci.component').then(m => m.PolitykaPrywatnosciComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  { path: '**', redirectTo: '' }
];
