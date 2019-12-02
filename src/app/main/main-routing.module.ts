import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { NamidiaComponent } from './namidia/namidia.component';
import { SobreComponent } from './sobre/sobre.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'namidia',
    component: NamidiaComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
