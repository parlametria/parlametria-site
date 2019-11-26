import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosExibirComponent } from './relatorios-exibir.component';

describe('RelatoriosExibirComponent', () => {
  let component: RelatoriosExibirComponent;
  let fixture: ComponentFixture<RelatoriosExibirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosExibirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
