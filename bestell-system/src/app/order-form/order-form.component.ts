import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MqttService } from '../mqtt.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  @Input() tableNumber!: undefined;
  selectedDish: string = ''; // Speichert die Auswahl
  dishes: string[] = ['Pizza', 'Pasta', 'Schnitzel', 'Salat', 'Burger', 'Suppe']; // 6 Gerichte

  constructor(private mqttService: MqttService) {}

  sendOrder() {
    if (!this.selectedDish) {
      console.warn('⚠ Kein Gericht ausgewählt!');
      return;
    }

    const orderData = {
      table: this.tableNumber,
      order: this.selectedDish,
    };

    this.mqttService.sendMessage(JSON.stringify(orderData));
    console.log('📤 Bestellung gesendet:', orderData);
  }
}
