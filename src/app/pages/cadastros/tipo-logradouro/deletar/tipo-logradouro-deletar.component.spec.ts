import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLogradouroDeletarComponent } from './tipo-logradouro-deletar.component';

describe('TipoLogradouroDeletarComponent', () => {
  let component: TipoLogradouroDeletarComponent;
  let fixture: ComponentFixture<TipoLogradouroDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoLogradouroDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLogradouroDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
