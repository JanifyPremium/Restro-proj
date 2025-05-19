import { Injectable } from '@angular/core';
import mqtt, { MqttClient } from 'mqtt';
@Injectable({
  providedIn: 'root',
})
export class MqttService {
  private client: MqttClient;
  private brokerUrl = 'ws://192.168.101.223:8080';

  constructor() {
    this.client = mqtt.connect(this.brokerUrl, {
    });

    this.client.on('connect', () => {
      console.log('✅ MQTT Verbindung erfolgreich!');
    });

    this.client.on('error', (err) => {
      console.error('❌ MQTT Fehler:', err);
    });
  }

  sendMessage( message: string) {
    const topic = '/bestellung/update';
    this.client.publish(topic, message, { qos: 1 }, (error) => {
      if (error) {
        console.error('❌ Fehler beim Senden:', error);
      } else {
        console.log(`📨 Gesendet an ${topic}: ${message}`);
      }
    });
  }
}
