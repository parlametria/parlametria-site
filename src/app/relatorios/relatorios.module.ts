import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosExibirComponent } from './relatorios-exibir/relatorios-exibir.component';
import { RelatoriosListarComponent } from './relatorios-listar/relatorios-listar.component';
import { RelatoriosRoutingModule } from './relatorios-routing.module';

@NgModule({
  declarations: [
    RelatoriosExibirComponent,
    RelatoriosListarComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
