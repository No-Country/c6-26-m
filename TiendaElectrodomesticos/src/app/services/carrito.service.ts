import { Injectable } from '@angular/core';
import { Product } from '../components/interfaces/producto-respuesta';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

items = [];


  constructor() {


    this.cargarStorage();
this.guardarStorage();


   }

  guardarStorage(){
    localStorage.setItem('items', JSON.stringify(this.items));

  }

 cargarStorage(){
  if(localStorage.getItem('items')){
this.items = JSON.parse(localStorage.getItem('items'));
}else{
this.items = [];
}
}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
