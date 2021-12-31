import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLogradouroAdicionarComponent } from './tipo-logradouro-adicionar.component';

describe('TipoLogradouroAdicionarComponent', () => {
  let component: TipoLogradouroAdicionarComponent;
  let fixture: ComponentFixture<TipoLogradouroAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoLogradouroAdicionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLogradouroAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
