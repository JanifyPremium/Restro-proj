import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from '../order-form/order-form.component';
@Component({
  selector: 'app-table-selection',
  imports: [CommonModule, OrderFormComponent],
  template: `
    <div class="table-selection">
      <button *ngFor="let table of tables"
              [ngClass]="{'active': selectedTable === table}"
              (click)="selectTable(table)">
        {{ table }}
      </button>
    </div>

    <app-order-form *ngIf="selectedTable" [tableNumber]="selectedTable"></app-order-form>
  `,
  styleUrls: ['./table-selection.component.scss']
})
export class TableSelectionComponent {
  tables = Array.from({ length: 10 }, (_, i) => i + 1);
  selectedTable: number | null = null;

  selectTable(table: number) {
    this.selectedTable = table;
    console.log("Ausgewählter Tisch:", table); // Debug-Log
  }
}
