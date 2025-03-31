import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  template: `
  <div *ngIf="order">
  <h3>Bestellung für Tisch {{ order.table }}</h3>
  <p>{{ order.details }}</p>
</div>
`,
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  @Input() order: any;
}
