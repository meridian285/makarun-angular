import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {ProductsService} from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService {

  price: number = 0;

  constructor(private productsService: ProductsService) { }


  // getProductsPrice(): number {
  //
  //   return
  // }

}
