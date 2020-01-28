import { Component, OnInit } from '@angular/core';
import { ArticuloService } from './articulo.service';
import { Articulo } from '../model/articulo';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {
    this.articuloService.lista().subscribe(
      data => {
        this.articulos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
