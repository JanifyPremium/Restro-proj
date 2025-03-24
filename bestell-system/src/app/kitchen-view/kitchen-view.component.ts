import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.scss']
})
export class KitchenViewComponent {
  orders: any[] = [];

  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getOrders(); // ✅ Jetzt wird orderService erst nach der Initialisierung genutzt
  }
}
