import { Injectable } from '@angular/core';

interface Order {
  id: number;
  table: number;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  addOrder(order: Order) {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  completeOrder(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
  }
}
