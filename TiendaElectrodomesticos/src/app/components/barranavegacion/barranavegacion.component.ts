import { CarritoService } from 'src/app/services/carrito.service';

import { Component, Input, OnInit, Output,EventEmitter, NgModule } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from '../carrito/carrito.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

import { Product, productos } from '../interfaces/producto-respuesta';

@Component({
  selector: 'app-barranavegacion',
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.css']
})
export class BarranavegacionComponent implements OnInit {

addToCart : [] = [];
product = productos;


@Output() addFromToCart = new EventEmitter<Product>();
@Input() myShopingCart : Product [] = [] ;
@Input () addedToCart = new EventEmitter<Product>();

  constructor(private router : Router,
              private  route: ActivatedRoute,
              private NgModule : CommonModule,
              private carritoService : CarritoService ) {

  }

  contarProductos(products: Product[]){
    this.myShopingCart;
    return products.length;

  }
  ngOnInit(): void {
    this.carritoService.carritoItems$.subscribe(cantidad => {
      this.addToCart = [];
    });


  }

onAddToShoppingCart(product: Product){

      this.myShopingCart.push(product);
      this.addFromToCart.emit(product);
     /*  this.cantidadProductos++; */
  }

  }
console.log(productos);

/* NOTA DEBEMOS ORBGANIZAR EL LOCAL STORAGE Y LA FORMA DE QUE LA IMAGEN DEL PRODUCTO SE MUESTRE EN EL CARRIOTO AL IGUAL QUE SALGA LA SUMA DE LOS PRODUCTOS QUE SE VAN AGREGANDO */
