import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  products: any[] = [];
  category = 'mens_tshirts';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    console.log('here');
    this.getProducts(this.category);
  }

  goToDetail(type: string) {
    this.router.navigateByUrl(`tabs/(home:detail/${type}/${this.category})`);
  }

  getProducts(type: string) {
    this.category = type;
    console.log(type);
    this.productService.getProducts(type).subscribe(
      data => {
        console.log(data);
        this.products = data;
      },
      err => {
        console.error(err);
      }
    );
  }
}
