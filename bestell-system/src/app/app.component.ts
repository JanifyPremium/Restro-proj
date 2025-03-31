import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KitchenViewComponent, OrderDetailComponent, OrderListComponent, TableSelectionComponent],
  template: `
    <h1>Bestellsystem</h1>
    <app-order-list></app-order-list>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bestell-system';
}
