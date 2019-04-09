import { Component } from '@angular/core'
import { PeliculasService } from 'src/app/services/peliculas.service'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  public peliculas: any[] = []
  public opcion: string = 'populares'
  public loading: boolean = true
  imagenUrl: string = 'image.tmdb.org/t/p/w300/'

  constructor(private _ps: PeliculasService) {
    this._ps.getPeliculas(this.opcion).subscribe((data: any) => {
      this.loading = false
      this.peliculas = data.results
    })
  }

  getPeliculas(opcion: string) {
    this.loading = true
    this._ps.getPeliculas(opcion).subscribe((data: any) => {
      this.loading = false
      this.peliculas = data.results
    })
  }
}
