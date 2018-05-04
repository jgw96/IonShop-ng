import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { SavedItemComponent } from './saved-item.component';

@NgModule({
  declarations: [SavedItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [SavedItemComponent]
})
export class SavedItemModule { }
