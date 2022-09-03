import { Product, productos } from './../interfaces/producto-respuesta';

import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

 myShopingCart:Product[] = [];
 productos = productos;


  @Input() Productos : Product | undefined;
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() notify = new EventEmitter();
  @Output() addProduct= new EventEmitter<Product>();


 onNotify() {
    this.notify.emit(this.productos);
  window.alert('AGREGADO AL CARRITO');
  }

  constructor(
              private  router : ActivatedRoute,
              private Http : HttpClient,
              private  carritoService : CarritoService,
              ) {

                /* this.guardarStorage(); */
              }

  /* guardarStorage(){
  localStorage.setItem('items', JSON.stringify(this.productos));


              } */

  addFromToCart(producto){
    this.addedProduct.emit(producto)
    this.myShopingCart.push(producto);
  }

  addToCart(producto){
    this.carritoService.addToCart(producto);
    window.alert('Tu producto ha sido agregado al carrito');

      }

  ngOnInit(): void {
console.log(productos);

    }



  }


