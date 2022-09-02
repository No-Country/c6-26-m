import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import {CarritoComponent} from './components/carrito/carrito.component';
import { CarritoService } from './services/carrito.service';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

{path: 'navegacion', component: BarranavegacionComponent},
{path: 'carrito', component: CarritoComponent},
{path: 'carrusel', component: CarruselComponent},
{path: 'home', component: HomeComponent},
{path: '**',pathMatch: 'full',redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
