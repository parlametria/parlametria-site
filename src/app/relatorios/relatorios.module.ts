import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from '@ag-grid-community/angular';

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
    AgGridModule.withComponents([]),
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
