import {Component, Output} from '@angular/core';
import {AdvantagesTypes} from "./types/advantages.types";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public phone: string = '+375 (29) 368-98-68';

  public showPresent: boolean = true;


  public advantages: AdvantagesTypes[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    }
  ]

  public products: ProductType[] = [
    {
      title: 'Маракун с Малиной',
      image: '1.png',
      price: 1.70,
    },
    {
      title: 'Маракун с манго',
      image: '2.png',
      price: 1.70,
    },
    {
      title: 'Пирог с ванилью',
      image: '3.png',
      price: 1.70,
    },
    {
      title: 'Пирог с фисташками',
      image: '4.png',
      price: 1.70,
    },
  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior:"smooth"});
  }

  public addToCart(product: ProductType, target:HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберите пиццу');
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Телефон адрес');
      return;
    }

    alert('Спасибо за заказ')

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }
}

