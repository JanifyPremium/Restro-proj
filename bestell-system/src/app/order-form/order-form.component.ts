import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-form',
  template: `
    <div class="order-form">
      <h2>Tisch {{ tableNumber }}</h2>
      <input [(ngModel)]="newDish" placeholder="Gericht hinzufügen" />
      <button (click)="addDish()">Hinzufügen</button>

      <ul>
        <li *ngFor="let dish of orders">{{ dish }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  @Input() tableNumber!: number;
  newDish: string = '';
  orders: string[] = [];

  addDish() {
    if (this.newDish.trim()) {
      this.orders.push(this.newDish);
      this.newDish = '';
    }
  }
}
