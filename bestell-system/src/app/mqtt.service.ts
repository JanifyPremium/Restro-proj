import { Injectable } from '@angular/core';
import { connect, MqttClient } from 'mqtt';

@Injectable({
  providedIn: 'root',
})
export class MqttService {
  private client: MqttClient;
  private brokerUrl = 'ws://192.168.101.223:1883'; // Ersetze mit deiner Broker-IP und Port

  constructor() {
    this.client = connect(this.brokerUrl, {
      username: '',  // Falls nötig
      password: '',  // Falls nötig
    });

    this.client.on('connect', () => {
      console.log('✅ MQTT Verbindung erfolgreich!');
    });

    this.client.on('error', (err) => {
      console.error('❌ MQTT Fehler:', err);
    });
  }

  sendMessage(topic: string, message: string) {
    this.client.publish(topic, message, { qos: 1 }, (error) => {
      if (error) {
        console.error('❌ Fehler beim Senden:', error);
      } else {
        console.log(`📨 Gesendet an ${topic}: ${message}`);
      }
    });
  }
}
