import { Component } from '@angular/core';

@Component({
  selector: 'app-table-selection',
  standalone: true,
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.scss']
})
export class TableSelectionComponent {
  tables = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, name: `Tisch ${i + 1}` }));

  selectTable(table: any) {
    console.log(`Tisch ${table.id} ausgewählt`);
  }
}
