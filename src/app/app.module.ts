import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'

// componentes
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { BuscarComponent } from './components/buscar/buscar.component'
// servicios
import { PeliculasService } from './services/peliculas.service'
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NoimagePipe } from './pipes/noimage.pipe'

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, BuscarComponent, TarjetasComponent, PeliculaComponent, NoimagePipe],
  imports: [BrowserModule, HttpClientJsonpModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
