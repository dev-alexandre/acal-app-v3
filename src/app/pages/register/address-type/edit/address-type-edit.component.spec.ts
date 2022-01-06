import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressTypeEditComponent } from './address-type-edit.component';


describe('AddressTypeEditComponent', () => {

  let component: AddressTypeEditComponent;
  let fixture: ComponentFixture<AddressTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
