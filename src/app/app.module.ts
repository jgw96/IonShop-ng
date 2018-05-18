import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
    ]),
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.pwa
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
