import { Component } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-page-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  products: any[];

  constructor(private productService: ProductService) { }

  ionViewDidEnter() {
    const productData = this.productService.get('cart');
    if (productData.length > 0) {
      this.products = productData;
      console.log(this.products);
    }
  }

  checkout() {
    if ((window as any).PaymentRequest) {

      const value = this.figureOutTotal();

      const supportedPaymentMethods = [
        {
          supportedMethods: 'basic-card',
        }
      ];

      const paymentDetails = {
        total: {
          label: 'Total',
          amount: {
            currency: 'USD',
            value: value.toString()
          }
        }
      };

      const request = new PaymentRequest(
        supportedPaymentMethods,
        paymentDetails
      );

      request.show();
    }
  }

  figureOutTotal() {
    let price = 0;

    this.products.forEach((product) => {
      const cost = product.item.price;
      price = price + cost;
    });

    console.log(price);
    return price;
  }

  remove(item) {
    this.productService.remove('cart', item);
    this.products = this.productService.get('cart');
  }
}
