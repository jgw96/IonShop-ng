import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';

import { LazyImgComponent } from '../../components/lazy-img/lazy-img.component';

import { ProductService } from '../../services/product.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [
    HomePage,
    LazyImgComponent
  ],
  providers: [
    ProductService
  ]
})
export class HomePageModule {}
