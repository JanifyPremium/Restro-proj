import { Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-detail/order-detail.component';

export const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'details', component: OrderDetailsComponent },
  { path: '**', redirectTo: '/' }
];
