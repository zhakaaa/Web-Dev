import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductItemComponent} from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    ProductItemComponent, CommonModule
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() category: string = ''; // Получаем категорию от AppComponent

  allProducts = {
    'Phones': [
      {
        id: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        name: 'Смартфон Apple iPhone ',
        description: 'Смартфон с экраном 6.1", 128Gb черный',
        price: 279000,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
        likes: 0
      },
      {
        id: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        name: 'Смартфон Xiaomi Redmi 13C',
        description: 'Смартфон Xiaomi Redmi 13C, 8 ГБ/256 ГБ черный',
        price: 59899,
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
        likes: 0
      },
      {
        id:3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        name: 'Смартфон Apple iPhone 16 Pro Max',
        description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
        price: 684000,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
        likes: 0
      },
      {
        id:4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
        name: 'Смартфон Apple iPhone 16 Pro Max',
        description: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
        price: 653000,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
        likes: 0
      },
      {
        id:5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        name: 'Смартфон Apple iPhone 16',
        description: 'Смартфон Apple iPhone 16 128Gb черный',
        price: 419000,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
        likes: 0
      },
    ],
    'Audio': [
      {
        id: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
        name: 'Apple AirPods 3',
        description: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
        price: 67000,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
        likes: 0
      },
      {
        id: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        name: 'Apple AirPods Pro 2',
        description: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
        price: 114000,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
        likes: 0
      },
      {
        id: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
        name: 'Marshall Major IV ',
        description: 'Наушники Marshall Major IV черный',
        price: 33000,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
        likes: 0
      },{
        id: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
        name: 'Яндекс Станция ',
        description: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
        price: 29000,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
        likes: 0
      },{
        id: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hec/84224248938526.jpg?format=gallery-medium',
        name: 'Xiaomi Redmi Buds 5',
        description: 'Наушники Xiaomi Redmi Buds 5 черный',
        price: 18000,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-5-chernyi-113969806/?c=750000000',
        likes: 0
      },

    ],
    'Home Appliances': [
      {
        id: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium',
        name: 'Блендер Slaouwo ',
        description: 'Блендер Slaouwo HB-2075 черный',
        price: 6790,
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000',
        likes: 0
      },{
        id: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
        name: 'Электрочайник',
        description: 'Электрочайник BEREKE BR-810 серый',
        price: 1900,
        rating: 4.4,
        link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
        likes: 0
      },{
        id: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h44/87138526232606.jpg?format=gallery-medium',
        name: 'Микроволновая печь',
        description: 'Микроволновая печь Hansa AMMF19M1SH серебристый',
        price: 34990,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/hansa-ammf19m1sh-serebristyi-123644190/?c=750000000',
        likes: 0
      },{
        id: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h11/82896148693022.jpg?format=gallery-medium',
        name: 'Стиральная машина',
        description: 'Samsung WW60AG4S00CELD белый',
        price: 153000,
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/samsung-ww60ag4s00celd-belyi-112618357/?c=750000000',
        likes: 0
      },{
        id: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h87/85529393266718.jpg?format=gallery-medium',
        name: 'Холодильник',
        description: 'Samsung RB31FERNDSA серебристый',
        price: 223000,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/samsung-rb31ferndsa-serebristyi-117760200/?c=750000000',
        likes: 0
      },
    ],
    'Furniture': [
      {
        id: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hea/84870309380126.png?format=gallery-medium',
        name: 'Матрас Ортопед',
        description: 'без пружин, 160x200x22 см, чехол вискоза, жаккард',
        price: 30590,
        rating: 4.3,
        link: 'https://kaspi.kz/shop/p/matras-ortoped-bez-pruzhin-160x200x22-sm-chehol-viskoza-zhakkard-115839796/?c=750000000',
        likes: 0
      },
      {
        id: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h2b/85356927713310.jpg?format=gallery-medium',
        name: 'Распашной шкаф',
        description: 'IMPERIAL Алёна 3Д, 120.2x190.5х46.6 см, белый, бежевый',
        price: 46000,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-imperial-aljona-3d-120-2x190-5h46-6-sm-belyi-bezhevyi-104713427/?c=750000000',
        likes: 0
      },
      {
        id: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',
        name: 'Morbido диван',
        description: 'прямой Комфорт, обивка микровелюр, 80х210х80 см, серый',
        price: 53000,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',
        likes: 0
      },
      {
        id: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium',
        name: 'Стул Чили',
        description: '86x45x37 см, обивка серый велюр',
        price: 11900,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000',
        likes: 0
      },
      {
        id: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/hd4/81370474905630.jpg?format=gallery-medium',
        name: 'Тумба с раковиной',
        description: 'Домино Промо элегия 50, 50.7x85x40.5 см, белый',
        price: 41000,
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/tumba-s-rakovinoi-domino-promo-elegija-50-50-7x85x40-5-sm-belyi-110944738/?c=750000000',
        likes: 0
      },
    ]
  };

  get products() {
    return this.allProducts[this.category as keyof typeof this.allProducts] || [];
  }

  removeProduct(productId: number) {
    this.allProducts[this.category as keyof typeof this.allProducts] = this.products.filter(p => p.id !== productId);
  }

}
