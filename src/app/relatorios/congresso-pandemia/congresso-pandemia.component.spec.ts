import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressoPandemiaComponent } from './congresso-pandemia.component';

describe('CongressoPandemiaComponent', () => {
  let component: CongressoPandemiaComponent;
  let fixture: ComponentFixture<CongressoPandemiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongressoPandemiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressoPandemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
