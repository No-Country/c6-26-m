import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Product } from './components/interfaces/producto-respuesta';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

import { CarritoComponent } from './components/carrito/carrito.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    CarruselComponent,
    TarjetasComponent,
    CarritoComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component : TarjetasComponent},
      {path:'tarjetas/producto', component : TarjetasComponent},
      {path:'', component : BarranavegacionComponent},
    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
