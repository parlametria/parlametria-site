import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-socios-empresas-campanha',
  templateUrl: './socios-empresas-campanha.component.html',
  styleUrls: ['./socios-empresas-campanha.component.scss']
})
export class SociosEmpresasCampanhaComponent implements OnInit, OnDestroy {

  columnDefs = [
    {
      headerName: 'Nome',
      field: 'nome_eleitoral',
      sortable: true,
      filter: 'agTextColumnFilter'
    },
    {
      headerName: 'Atividade Econômica',
      field: 'grupo_atividade_economica',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Proporção da Doação',
      field: 'proporcao_doacao',
      sortable: true,
      filter: true,
      width: 180
    },
    {
      headerName: 'Partido',
      field: 'sg_partido',
      sortable: true,
      filter: true,
      width: 100
    },
    {
      headerName: 'Total por atividade',
      field: 'total_por_atividade',
      sortable: true,
      filter: 'agNumberColumnFilter',
      width: 160
    },
    {
      headerName: 'Total Recebido',
      field: 'total_recebido_geral',
      sortable: true,
      filter: 'agNumberColumnFilter',
      width: 160
    },
    {
      headerName: 'UF',
      field: 'uf',
      sortable: true,
      filter: true,
      width: 60
    }
  ];

  private unsubscribe = new Subject();

  rowData: any;
  suplentesDoadores: any;

  modules = AllCommunityModules;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.rowData = this.apiService.getJson('deputados-setor-economico.json');

    this.apiService.getJson('suplentes-doadores-senado.json')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(suplentes => {
        this.suplentesDoadores = suplentes;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
