import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  orders: Array<{ name: string, price: number }> = []; // Crear una lista de órdenes

  constructor() {}

  addToOrder(foodName: string, foodPrice: number) {
    // Agregar la orden a la lista
    this.orders.push({ name: foodName, price: foodPrice });
  }
}

