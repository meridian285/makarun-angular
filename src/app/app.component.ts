import {Component, OnInit} from '@angular/core';
import {AdvantagesTypes} from "./types/advantages.types";
import {ProductType} from "./types/product.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";
import {ProductPriceService} from "./services/product-price.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public phone: string = '375293689868';

  public showPresent: boolean = true;

  public sumPrice: number = 0;

  public instagram: string = 'https://instagram.com';

  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  constructor(private productService: ProductsService, public cartService: CartService, public productsPrice: ProductPriceService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.sumPrice = Math.round((this.sumPrice += product.price) * 100) / 100;

    alert(product.title + ' добавлен в корзину!');
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
      alert('Телефон');
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

