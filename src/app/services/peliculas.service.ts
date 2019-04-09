import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey: string = '4fa158e44a3f1a9dd31e58b7f97449c8'
  private urlMovieDb: string = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) {}

  getCarteleraActual() {
    let hoy = new Date()
    let dosSemanasAtras = new Date(hoy.getTime() - 864000000)
    dosSemanasAtras = new Date(dosSemanasAtras)
    let url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${
      dosSemanasAtras.toISOString().split('T')[0]
    }&primary_release_date.lte=${hoy.toISOString().split('T')[0]}&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map(res => res))
  }

  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map(res => res))
  }

  getKidsPopulares() {
    let url = `${
      this.urlMovieDb
    }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map(res => res))
  }

  getPeliculas(categoria: string) {
    if (categoria === 'actuales') {
      return this.getCarteleraActual()
    } else if (categoria === 'populares') {
      return this.getPopulares()
    } else if (categoria === 'kids') {
      return this.getKidsPopulares()
    } else {
      return this.getCarteleraActual()
    }
  }
}
