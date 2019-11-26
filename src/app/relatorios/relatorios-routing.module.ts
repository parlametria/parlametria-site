import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatoriosListarComponent } from './relatorios-listar/relatorios-listar.component';
import { RelatoriosExibirComponent } from './relatorios-exibir/relatorios-exibir.component';

const routes: Routes = [
  {
    path: '',
    component: RelatoriosListarComponent
  },
  {
    path: ':id',
    component: RelatoriosExibirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
