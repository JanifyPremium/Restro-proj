import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tables = new Array(10).fill(null);
  selectedTable: number | null = null;

  navigate(section: string) {
    console.log(`Navigiere zu: ${section}`);
  }

  selectTable(index: number) {
    this.selectedTable = index;
  }

  markDone() {
    console.log('Bestellung abgeschlossen');
  }
}
