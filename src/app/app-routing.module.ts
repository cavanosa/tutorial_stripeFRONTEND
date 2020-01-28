import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaArticuloComponent } from './articulo/lista-articulo.component';
import { DetalleArticuloComponent } from './articulo/detalle-articulo.component';

const routes: Routes = [
  {path: '', component: ListaArticuloComponent},
  {path: 'lista', component: ListaArticuloComponent},
  {path: 'detalle/:id', component: DetalleArticuloComponent},
  {path: '**', redirectTo: 'lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
