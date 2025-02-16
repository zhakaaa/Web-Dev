import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Смартфон Apple iPhone ',
      description: 'Смартфон с экраном 6.1", 128Gb черный',
      price: 279000,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      name: 'Смартфон Xiaomi Redmi 13C',
      description: 'Смартфон Xiaomi Redmi 13C, 8 ГБ/256 ГБ черный',
      price: 59899,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'Смартфон Apple iPhone 16 Pro Max',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      price: 684000,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Смартфон Apple iPhone 16 Pro Max',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      price: 653000,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      name: 'Смартфон Apple iPhone 16',
      description: 'Смартфон Apple iPhone 16 128Gb черный',
      price: 419000,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium',
      name: 'Смартфон Realme Note 50',
      description: 'Смартфон Realme Note 50 3 ГБ/64 ГБ черный',
      price: 37450,
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy A25 5G',
      description: 'Смартфон Samsung Galaxy A25 5G 6 ГБ/128 ГБ темно-синий',
      price: 114890,
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h00/87088029925406.jpg?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy A06',
      description: 'Смартфон Samsung Galaxy A06 6 ГБ/128 ГБ черный',
      price: 62000,
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy S23 Ultra',
      description: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      price: 559000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h23/84963273736222.png?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy S24 5G',
      description: 'Смартфон Samsung Galaxy S24 5G 8 ГБ/256 ГБ черный',
      price: 579000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000'
    },

  ];


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
