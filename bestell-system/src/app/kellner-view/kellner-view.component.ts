import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MqttService } from '../mqtt.service';
import { TableSelectionComponent } from '../table-selection/table-selection.component';

@Component({
  selector: 'app-kellner-view',
  standalone: true,
  imports: [CommonModule, FormsModule, TableSelectionComponent],
  templateUrl: './kellner-view.component.html',
  styleUrls: ['./kellner-view.component.scss'],
})
export class KellnerViewComponent {
  searchTerm = '';
  availableDishes = ['Pizza', 'Burger', 'Sushi', 'Salat', 'Curry', 'Pommes', 'Tacos', 'Pasta'];
  selectedDishes: string[] = [];
  selectedTable: number | null = null;

  constructor(private mqttService: MqttService) {}

  get filteredDishes() {
    const term = this.searchTerm.toLowerCase();
    return this.availableDishes.filter(
      (dish) => dish.toLowerCase().includes(term) && !this.selectedDishes.includes(dish)
    );
  }

  addDish(dish: string) {
    this.selectedDishes.push(dish);
    this.searchTerm = '';
  }

  removeDish(dish: string) {
    this.selectedDishes = this.selectedDishes.filter((d) => d !== dish);
  }

  onTableSelected(table: number | null) {
    this.selectedTable = table;
  }

  sendOrder() {
    if (this.selectedTable === null || this.selectedDishes.length === 0) {
      alert('Bitte Tisch auswählen und mindestens ein Gericht hinzufügen.');
      return;
    }

    const payload = JSON.stringify({
      table: this.selectedTable,
      dishes: this.selectedDishes,
    });

    this.mqttService.sendMessage(payload);
    alert('✅ Bestellung gesendet!');
    this.selectedDishes = [];
  }
}
