import { ToastController, ActionSheetController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

import { ProductService } from '../../services/product.service';

import { ClothingItem } from '../../interfaces/clothing-item';

@Component({
  selector: 'app-clothing-detail',
  templateUrl: './clothing-detail.page.html',
  styleUrls: ['./clothing-detail.page.scss'],
})
export class ClothingDetailPage {

  clothingItem: ClothingItem;
  cleanedDesc: string;
  savedState = 'star-outline';
  size = 'medium';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ionViewDidEnter() {
    const { category, item } = this.route.snapshot.params;

    this.productService.getProducts(category).subscribe(
      items => {
        this.clothingItem = items.filter(clothing => clothing.name === item)[0];
        console.log(this.clothingItem);
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

  async share(item) {
    console.log(item);

    try {
      // use the web API in the browser
      console.log('i have the web share api');
      await (navigator as any).share({
        title: 'Clothes on IonShop',
        text: `Check this out, ${item.title}`,
        url: window.location.href,
      });
    } catch (e) {
      console.log('gotta do native stuff');
      await Share.share({
        title: 'Clothes on IonShop',
        text: `Check this out, ${item.title}`,
        url: window.location.href,
        dialogTitle: 'Share'
      });
    }
  }

  async addToFaves(item) {
    console.log('here');
    this.savedState = 'star';
    this.productService.save('faves', { 'item': item, 'size': this.size || 'none' });

    const toast = await this.toastCtrl.create({
      message: 'Added to favorites',
      duration: 1500
    });
    await toast.present();
  }

  async pickSize() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Size',
      buttons: [
        {
          text: 'Small',
          handler: () => {
            this.size = 'small';
          }
        },
        {
          text: 'Medium',
          handler: () => {
            this.size = 'medium';
          }
        },
        {
          text: 'Large',
          handler: () => {
            this.size = 'large';
          }
        },
        {
          text: 'X-large',
          handler: () => {
            this.size = 'x-large';
          }
        }
      ]
    });

    actionSheet.present();
  }
}
