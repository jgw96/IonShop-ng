import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';

import { LazyImgComponent } from '../../components/lazy-img/lazy-img.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [
    HomePage,
    LazyImgComponent
  ]
})
export class HomePageModule {}
