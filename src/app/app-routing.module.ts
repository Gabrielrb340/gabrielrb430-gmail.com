import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './pages/heroes/heroes.component'
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

const routes: Routes = [
  {path:'' , component: HeroesComponent},
  {path:'heroes' , component: HeroesComponent},
  {path:'detalhes/:id' , component: DetalhesComponent}

];//Rotas navegador

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
