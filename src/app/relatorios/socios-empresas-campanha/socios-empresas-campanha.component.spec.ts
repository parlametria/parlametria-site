import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosEmpresasCampanhaComponent } from './socios-empresas-campanha.component';

describe('SociosEmpresasCampanhaComponent', () => {
  let component: SociosEmpresasCampanhaComponent;
  let fixture: ComponentFixture<SociosEmpresasCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociosEmpresasCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosEmpresasCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
