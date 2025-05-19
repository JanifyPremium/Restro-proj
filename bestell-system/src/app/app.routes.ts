import { Routes } from '@angular/router';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';
import { KellnerViewComponent } from './kellner-view/kellner-view.component';

export const routes: Routes = [
  {
    path: '',
    component: KitchenViewComponent,
    pathMatch: 'full',
  },
  {
    path: 'kitchen',
    component: KitchenViewComponent,
  },
  {
    path: 'orders',
    component: KellnerViewComponent,
  }
];
