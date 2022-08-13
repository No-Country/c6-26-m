
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { HttpClient } from '@angular/common/http';
import { ProductoRespuesta } from '../interfaces/producto-respuesta';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  newProductos : any[] = [];

  constructor(private productos : ProductosService,
              private  router : ActivatedRoute,
              private Http : HttpClient ) { }


  ngOnInit(): void {

    this.productos.getProductos()
    .subscribe ((res : ProductoRespuesta) => {
    this.newProductos = res.data;
    console.log(res);
    })
  }

}
