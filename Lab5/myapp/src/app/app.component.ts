import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ProductListComponent, CommonModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: "Phones", image: 'https://resources.cdn-kaspi.kz/img/cnt/m/n/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png' },
    { name: "Audio", image: 'https://resources.cdn-kaspi.kz/img/cnt/m/n/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png' },
    { name: "Home Appliances", image: 'https://resources.cdn-kaspi.kz/img/cnt/m/n/be5d3776-1758-4869-940c-aa703bc5dca6-Home%20App.png' },
    { name: "Furniture", image: 'https://resources.cdn-kaspi.kz/img/cnt/m/n/c75cdd81-0da8-4fb0-ae47-de52fcbee721-Furniture.png' }
  ];
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
