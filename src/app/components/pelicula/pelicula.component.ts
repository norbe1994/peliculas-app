import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PeliculasService } from 'src/app/services/peliculas.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  public pelicula: any = {}
  public loading: boolean = true
  public image: boolean = true
  private id: string

  constructor(private _ps: PeliculasService, private route: ActivatedRoute, private _location: Location) {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this._ps.getPelicula(this.id).subscribe((data: any) => {
        this.pelicula = data
        if (!data.backdrop_path) {
          this.image = false
        }
      })
      this.esperar()
    })
  }

  regresar() {
    this._location.back()
  }

  esperar() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}
