import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalocComponent } from './listaloc.component';

describe('ListalocComponent', () => {
  let component: ListalocComponent;
  let fixture: ComponentFixture<ListalocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
