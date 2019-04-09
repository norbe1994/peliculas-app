import { NgModule } from '@angular/core'
import { HomeComponent } from './components/home/home.component'
import { BuscarComponent } from './components/buscar/buscar.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
