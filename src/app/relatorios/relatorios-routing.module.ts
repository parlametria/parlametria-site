import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatoriosListarComponent } from './relatorios-listar/relatorios-listar.component';
import { SociosEmpresasCampanhaComponent } from './socios-empresas-campanha/socios-empresas-campanha.component';


const routes: Routes = [
  {
    path: '',
    component: RelatoriosListarComponent
  },
  {
    path: '2019/11/setores-economicos-na-campanha-2018',
    component: SociosEmpresasCampanhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
