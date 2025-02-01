import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductsComponent } from './components/products/products.component';
import { BntAnimateDirective } from './directive/bnt-animate.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { FormatPhonePipe } from './pipes/format-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductsComponent,
    BntAnimateDirective,
    CurrencyPipe,
    CutTextPipe,
    FormatPhonePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
