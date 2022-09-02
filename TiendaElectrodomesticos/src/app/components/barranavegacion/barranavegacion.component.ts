
import { Component, Input, OnInit, NgModule } from '@angular/core';
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


product = productos;

  constructor(private router : Router,
              private  route: ActivatedRoute,


              private NgModule : CommonModule  ) {

   /*  let productStorage = localStorage.getItem('productos');
    if (productStorage) {
      this.product = JSON.parse(productStorage);
    }
    this.product = []; */
  }

  contarProductos(products: Product[]){
    return products.length;

  }

  ngOnInit(): void {
  }




}
console.log(productos);
/* NOTA DEBEMOS ORBGANIZAR EL LOCAL STORAGE Y LA FORMA DE QUE LA IMAGEN DEL PRODUCTO SE MUESTRE EN EL CARRIOTO AL IGUAL QUE SALGA LA SUMA DE LOS PRODUCTOS QUE SE VAN AGREGANDO */
