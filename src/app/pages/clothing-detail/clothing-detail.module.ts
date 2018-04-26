import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothingDetailPage } from './clothing-detail.page';
import { ProductService } from '../../services/product.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ClothingDetailPage }])
  ],
  declarations: [ClothingDetailPage],
  providers: [
    ProductService
  ]
})
export class ClothingDetailModule {}
