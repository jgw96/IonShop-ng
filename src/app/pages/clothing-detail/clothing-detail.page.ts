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
  size: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) {}

  ionViewDidEnter() {
    this.route.paramMap.subscribe((params: Params) => {
      const cat = params.get('category');
      const item = params.get('item');

      this.productService.getProducts(cat).subscribe(
        items => {
          this.clothingItem = items.filter(clothing => clothing.name === item)[0];
          console.log(this.clothingItem);
        },
        err => {
          console.error(err);
        }
      );
    });
  }

  async addToCart(item) {
    console.log(this.size);
    this.productService.save('cart', {'item': item, 'size': this.size});

    const toast = await this.toastCtrl.create({
      message: 'Added to cart',
      duration: 1500
    });
    await toast.present();
  }

  async addToFaves(item) {
    console.log('here');
    this.productService.save('faves', {'item': item, 'size': this.size || 'none'});

    const toast = await this.toastCtrl.create({
      message: 'Added to favorites',
      duration: 1500
    });
    await toast.present();
  }
}
