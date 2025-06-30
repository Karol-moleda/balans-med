import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    { src: '/img/1.jpg', alt: 'Zdjęcie 1', title: 'Gabinet 1' },
    { src: '/img/2.jpg', alt: 'Zdjęcie 2', title: 'Gabinet 2' },
    { src: '/img/3.jpg', alt: 'Zdjęcie 3', title: 'Gabinet 3' },
    { src: '/img/4.jpg', alt: 'Zdjęcie 4', title: 'Gabinet 4' },
    { src: '/img/5.jpg', alt: 'Zdjęcie 5', title: 'Gabinet 5' },
    { src: '/img/6.jpg', alt: 'Zdjęcie 6', title: 'Gabinet 6' },
    { src: '/img/7.jpg', alt: 'Zdjęcie 7', title: 'Gabinet 7' },
    { src: '/img/8.jpg', alt: 'Zdjęcie 8', title: 'Gabinet 8' },
    { src: '/img/9.jpg', alt: 'Zdjęcie 9', title: 'Gabinet 9' },
  ];

  selectedImage: any = null;

  constructor(private dialog: MatDialog) {}

  openImageModal(image: any) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
