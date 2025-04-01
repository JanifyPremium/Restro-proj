import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="order-list">
      <div class="orders-left">
        <h2>Tischauswahl</h2>
        <p>Bestellung nach Tischauswahl</p>
      </div>
      <div class="orders-right">
        <h2>Älteste Bestellung</h2>
      </div>
      <button (click)="markAsDone()">Done</button>
    </div>
  `,
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  markAsDone() {
    console.log('Bestellung abgeschlossen');
  }
  dishes = ['Pizza', 'Burger', 'Schnitzel', 'Salat', 'Pasta', 'Suppe'];
  selectedDish: string = '';
}
