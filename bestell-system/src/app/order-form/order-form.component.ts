import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MqttService } from '../mqtt.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule], // Standalone Import!
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  @Input() tableNumber!: number;
  orderText: string = '';

  constructor(private mqttService: MqttService) {}

  sendOrder() {
    const orderData = {
      table: this.tableNumber,
      order: this.orderText,
    };

    this.mqttService.sendMessage('restaurant/orders', JSON.stringify(orderData));
    console.log('📤 Bestellung gesendet:', orderData);
  }
}
