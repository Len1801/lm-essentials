import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { icon: '💻', key: 'tech' },
    { icon: '📱', key: 'electronics' },
    { icon: '💪', key: 'nutrition' },
    { icon: '✨', key: 'perfumes' },
    { icon: '💄', key: 'beauty' },
    { icon: '🌿', key: 'vitamins' }
  ];
}
