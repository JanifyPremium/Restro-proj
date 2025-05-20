import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-kitchen-view',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.scss']
})
export class KitchenViewComponent {
  orders: any[] = [];

  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getOrders();
  }
}
