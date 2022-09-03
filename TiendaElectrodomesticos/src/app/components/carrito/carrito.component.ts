
import { Component, OnInit, Output,EventEmitter, Input, } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { CarritoService } from 'src/app/services/carrito.service';
import { Product, productos } from './../interfaces/producto-respuesta';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  items = this.carritoService.getItems();

@Output() notify = new EventEmitter();
@Input() addFromToCart = new EventEmitter<Product>();


constructor(private carritoService : CarritoService,
              private  route :ActivatedRoute,
              ) {


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
 borrarItem(i : number){
  this.items.splice(i,1);
  this.carritoService.guardarStorage();

}

confirmarItem(){
  this.carritoService.getItems();
      window.confirm('PROCEDER A PASARELA DE PAGOS');
}

/* borrarTodo( i : number){
  this.items.splice(i,i);
  this.carritoService.guardarStorage();
} */

/* borradoItem(i){
  this.carritoService.addToCart(i);
  window.alert('Tu producto ha sido eliminado del carrito');

  } */

  ngOnInit(): void {

  }

  contarProductos(productos: Product){
    this.addFromToCart.emit(productos);
    return this.items.length;
  }
}


