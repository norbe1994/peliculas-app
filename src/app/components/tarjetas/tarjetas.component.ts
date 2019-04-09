import { Component } from '@angular/core'
import { PeliculasService } from 'src/app/services/peliculas.service'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  public peliculas: any[] = []
  public opcion: string = 'actuales'
  public loading: boolean = true
  public parametro: string
  imagenUrl: string = 'image.tmdb.org/t/p/w300/'

  constructor(private _ps: PeliculasService) {
    this._ps.getPeliculas(this.opcion).subscribe((data: any) => {
      this.peliculas = data.results
    })
    this.esperar()
  }

  getPeliculas(opcion: string) {
    this.loading = true
    this._ps.getPeliculas(opcion).subscribe((data: any) => {
      this.peliculas = data.results
    })
    this.esperar()
  }

  buscar(parametro: string) {
    this.loading = true
    this._ps.buscar(parametro).subscribe((data: any) => {
      this.peliculas = data.results
    })
    this.esperar()
  }

  esperar() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  }
}
