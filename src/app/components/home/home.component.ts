import { Component } from '@angular/core'
import { PeliculasService } from 'src/app/services/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public populares: any[] = []

  constructor(private _ps: PeliculasService) {
    this._ps.getPopulares().subscribe((data: any) => {
      this.populares = data.results
    })
    this._ps.getCarteleraActual().subscribe(data => console.log(data))
    this._ps.getKidsPopulares().subscribe(data => console.log(data))
  }
}
