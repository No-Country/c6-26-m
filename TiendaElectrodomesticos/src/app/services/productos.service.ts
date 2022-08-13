import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductoRespuesta } from '../components/interfaces/producto-respuesta';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private readonly http:HttpClient) { }

  getProductos() {

    let params = new HttpParams();

    params.append('limite','100');
    params.append('tipo','todos');

    let misProductos = new HttpParams().set('limite','100').set('tipo','todos')

    return this.http.get<ProductoRespuesta>('https://fakestoreapi.com/products', {params: misProductos})


  }
}
