import { Injectable } from '@angular/core';
import { Product } from '../components/interfaces/producto-respuesta';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

private carritoItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
public carritoItems$ = this.carritoItems.asObservable();

  addProducto(): void {
    const valorActual = this.carritoItems.value;
    this.carritoItems.next(valorActual + 1);
  }

items : Product [] = [];

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
