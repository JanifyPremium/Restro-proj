import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-table-selection',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.scss'],
})
export class TableSelectionComponent {
  selectedTable: number | null = null;

  @Output() tableSelected = new EventEmitter<number | null>();

  tables = Array.from({ length: 10 }, (_, i) => i + 1);

  selectTable(table: number) {
    this.selectedTable = this.selectedTable === table ? null : table;
    this.tableSelected.emit(this.selectedTable);
  }
}
