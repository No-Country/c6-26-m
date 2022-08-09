import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

const routes: Routes = [
{path: 'navegacion', component: BarranavegacionComponent},
{path: 'carrusel', component: CarruselComponent},
{path: '**',pathMatch: 'full',redirectTo: 'navegacion'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
