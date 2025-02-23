import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any; // Получаем товар от списка
  @Output() remove = new EventEmitter<number>(); // Передаём ID товара для удаления

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }

  shareToWhatsApp(link: string) {
    const message = `🔥 Посмотри этот товар: ${link}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareToTelegram(link: string) {
    const message = `🔥 Посмотри этот товар: ${link}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

  }
}
