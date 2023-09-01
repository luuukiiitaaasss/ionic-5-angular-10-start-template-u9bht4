import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  orders: Array<{ name: string, price: number }> = []; // Crear una lista de órdenes

  constructor() {}

  ionViewWillEnter() {
    // Se ejecuta cada vez que se muestra la página
    this.orders = [/* Aquí puedes cargar las órdenes almacenadas */];
  }
}
