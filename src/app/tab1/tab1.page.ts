import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navCtrl: NavController) {}

  // Función para abrir WhatsApp
  openWhatsApp() {
    window.open('https://www.whatsapp.com/?lang=es_LA', '_system');
  }

  // Función para abrir Instagram
  openInstagram() {
    window.open('https://www.instagram.com/', '_system');
  }

  // Función para abrir Facebook
  openFacebook() {
    window.open('https://es-la.facebook.com/', '_system');
  }
}
