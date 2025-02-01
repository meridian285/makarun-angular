import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): ProductType[] {

    return [
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
  }

}
