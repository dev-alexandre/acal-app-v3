import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLogradouroEditarComponent } from './tipo-logradouro-editar.component';

describe('TipoLogradouroEditarComponent', () => {
  let component: TipoLogradouroEditarComponent;
  let fixture: ComponentFixture<TipoLogradouroEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoLogradouroEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLogradouroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
