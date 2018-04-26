import { Component } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-page-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  products: any[];

  constructor(private productService: ProductService) {}

  ionViewDidEnter() {
    const productsData = this.productService.get('faves');
    if (productsData.length > 0) {
      this.products = productsData;
    }
  }

  remove(item) {
    this.productService.remove('faves', item);
    this.products = this.productService.get('faves');
  }
}
