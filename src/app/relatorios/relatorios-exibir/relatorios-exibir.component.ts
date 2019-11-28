import { Component, OnInit } from '@angular/core';

import { AllCommunityModules } from '@ag-grid-community/all-modules';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-relatorios-exibir',
  templateUrl: './relatorios-exibir.component.html',
  styleUrls: ['./relatorios-exibir.component.scss']
})
export class RelatoriosExibirComponent implements OnInit {

  columnDefs = [
    { headerName: 'Nome', field: 'nome_eleitoral', sortable: true, filter: 'agTextColumnFilter' },
    { headerName: 'Atividade Econômica', field: 'grupo_atividade_economica', sortable: true, filter: true },
    { headerName: 'Proporção da Doação', field: 'proporcao_doacao', sortable: true, filter: true },
    { headerName: 'Partido', field: 'sg_partido', sortable: true, filter: true },
    { headerName: 'Total por atividade', field: 'total_por_atividade', sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'Total Recebido', field: 'total_recebido_geral', sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'UF', field: 'uf', sortable: true, filter: true }
  ];

  rowData: any;

  modules = AllCommunityModules;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.rowData = this.apiService.getJson('deputados-setor-economico.json');
  }

}
