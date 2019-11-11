import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { BlogComponent } from './blog/blog.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { NamidiaComponent } from './namidia/namidia.component';

@NgModule({
  declarations: [HomeComponent, SobreComponent, BlogComponent, ProjetosComponent, RelatoriosComponent, NamidiaComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }