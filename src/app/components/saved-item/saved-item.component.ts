import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ActionSheetController } from '@ionic/angular';

import { SavedItem } from '../../interfaces/saved-item';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-saved-item',
  templateUrl: './saved-item.component.html',
  styleUrls: ['./saved-item.component.css'],
  animations: [
    trigger('flyout', [
      transition(':leave', [
        animate(5000, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class SavedItemComponent {

  @Input() product: SavedItem;
  @Input() type: string;

  @Output() deleted = new EventEmitter<boolean>();

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private productService: ProductService
  ) { }

  async remove(item) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Remove Item?',
      buttons: [
        {
          text: 'Remove',
          role: 'destructive',
          cssClass: 'danger',
          handler: () => {
            this.productService.remove(this.type, item);
            this.deleted.emit(true);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

}
