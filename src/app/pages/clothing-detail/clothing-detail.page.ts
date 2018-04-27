import { ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-clothing-detail',
  templateUrl: './clothing-detail.page.html',
  styleUrls: ['./clothing-detail.page.scss'],
})
export class ClothingDetailPage {

  clothingItem: any;
  cleanedDesc: string;
  size: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) { }

  ionViewDidEnter() {
    const { category, item } = this.route.snapshot.params;

    this.productService.getProducts(category).subscribe(
      items => {
        this.clothingItem = items.filter(clothing => clothing.name === item)[0];
        this.cleanedDesc = this.unescapeText(this.clothingItem.description);
      },
      err => {
        console.error(err);
      }
    );
  }

  unescapeText(text) {
    const elem = document.createElement('textarea');
    elem.innerHTML = text;
    return elem.textContent;
  }

  async addToCart(item) {
    console.log(this.size);
    this.productService.save('cart', { 'item': item, 'size': this.size });

    const toast = await this.toastCtrl.create({
      message: 'Added to cart',
      duration: 1500
    });
    await toast.present();
  }

  async addToFaves(item) {
    console.log('here');
    this.productService.save('faves', { 'item': item, 'size': this.size || 'none' });

    const toast = await this.toastCtrl.create({
      message: 'Added to favorites',
      duration: 1500
    });
    await toast.present();
  }
}
