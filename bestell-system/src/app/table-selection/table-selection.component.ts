import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-selection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-selection">
      <div *ngFor="let table of tables" class="table-box" (click)="selectTable(table)">
        {{ table }}
      </div>
    </div>
  `,
  styleUrls: ['./table-selection.component.scss']
})
export class TableSelectionComponent {
  tables = Array.from({ length: 10 }, (_, i) => i + 1);

  selectTable(table: number) {
    console.log('Tisch ausgewählt:', table);
  }
}
