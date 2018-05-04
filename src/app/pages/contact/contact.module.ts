import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPage } from './contact.page';

import { ProductService } from '../../services/product.service';
import { SavedItemModule } from '../../components/saved-item/saved-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: ContactPage }]),
    SavedItemModule
  ],
  declarations: [
    ContactPage
  ],
  providers: [
    ProductService
  ]
})
export class ContactPageModule {}
