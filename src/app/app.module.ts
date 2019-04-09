import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
// componentes
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { BuscarComponent } from './components/buscar/buscar.component'
// servicios
import { PeliculasService } from './services/peliculas.service'

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, BuscarComponent],
  imports: [BrowserModule, HttpClientJsonpModule, HttpClientModule, AppRoutingModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
