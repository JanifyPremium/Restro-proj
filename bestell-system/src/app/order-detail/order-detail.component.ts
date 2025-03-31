import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="order-details">
      <input type="text" placeholder="Bestellung eingeben" />
      <div class="order-list">
        <h2>Bestellung (Details/Gerichte)</h2>
      </div>
      <button (click)="sendOrder()">Send Order</button>
      <button (click)="startPieper()">Start Pieper</button>
    </div>
  `,
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailsComponent {
  sendOrder() {
    console.log('Bestellung gesendet');
  }

  startPieper() {
    console.log('Pieper gestartet');
  }
}
