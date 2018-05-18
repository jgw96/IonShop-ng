import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @Output() cartSelected = new EventEmitter<boolean>();

  cartTabSelected() {
    console.log('here');
    this.cartSelected.emit();
  }
}

