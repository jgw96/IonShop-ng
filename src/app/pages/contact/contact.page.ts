import { Component, OnChanges } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { ProductService } from '../../services/product.service';
import { SavedItem } from '../../interfaces/saved-item';
import { SavedItemComponent } from '../../components/saved-item/saved-item.component';


@Component({
  selector: 'app-page-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  products: SavedItem[];

  constructor(
    private productService: ProductService,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ionViewDidEnter() {
    this.getProducts();
  }

  getProducts() {
    const productData = this.productService.get('cart');
    if (productData.length > 0) {
      this.products = productData;
    } else {
      this.products = null;
    }
  }

  deleted() {
    console.log('something was deleted');
    this.getProducts();
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
      console.log(product);
      const cost = product.item.price;
      price = price + cost;
    });

    console.log(price);
    return price;
  }
}
