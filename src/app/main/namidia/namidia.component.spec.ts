import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamidiaComponent } from './namidia.component';

describe('NamidiaComponent', () => {
  let component: NamidiaComponent;
  let fixture: ComponentFixture<NamidiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamidiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
