import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosListarComponent } from './relatorios-listar.component';

describe('RelatoriosListarComponent', () => {
  let component: RelatoriosListarComponent;
  let fixture: ComponentFixture<RelatoriosListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
