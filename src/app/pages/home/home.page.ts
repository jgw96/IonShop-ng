import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  products: Observable<any>;
  category = 'mens_tshirts';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts(this.category);
  }

  goToDetail(type: string) {
    this.router.navigateByUrl(`tabs/(home:detail/${type}/${this.category})`);
  }

  getProducts(type: string) {
    this.category = type;
    this.products = this.productService.getProducts(type);
  }
}
