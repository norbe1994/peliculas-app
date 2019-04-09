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

  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map(res => res))
  }

  // imagen url image.tmdb.org/t/p/w300/
}
