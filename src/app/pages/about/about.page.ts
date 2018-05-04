import { Component } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { SavedItem } from '../../interfaces/saved-item';

@Component({
  selector: 'app-page-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  products: SavedItem[];

  constructor(private productService: ProductService) {}

  ionViewDidEnter() {
    this.getProducts();
  }

  getProducts() {
    const productsData = this.productService.get('faves');
    if (productsData && productsData.length > 0) {
      this.products = productsData;
    }
  }

  deleted() {
    this.getProducts();
  }
}
