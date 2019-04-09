import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  @Input() peliculas: any[] = []
  imagenUrl: string = 'image.tmdb.org/t/p/w300/'

  constructor() {}
}
