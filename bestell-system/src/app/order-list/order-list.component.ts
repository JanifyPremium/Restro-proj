import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true, // ✅ WICHTIG
  imports: [CommonModule],
  template: `
    <div *ngIf="orders.length > 0; else noOrders">
      <ul>
        <li *ngFor="let order of orders">
          {{ order.name }} <button (click)="markAsDone(order.id)">Fertig</button>
        </li>
      </ul>
    </div>

    <ng-template #noOrders>
      <p>Keine Bestellungen vorhanden.</p>
    </ng-template>
  `,
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  orders = [{ id: 1, name: 'Pizza' }, { id: 2, name: 'Burger' }];

  markAsDone(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
  }
}
