import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { NbToastrService } from '@nebular/theme';
import { TipoLogradouroService } from '../tipo-logradouro.service';

@Component({
  selector: 'ngx-tipo-logradouro-editar',
  templateUrl: './tipo-logradouro-editar.component.html',
  styleUrls: ['./tipo-logradouro-editar.component.scss'],
})
export class TipoLogradouroEditarComponent implements OnInit {

  public loading: boolean = false;
  public form: FormGroup;
  public submitted = false;
  private key: string = `[address-type][editar]`;
  public addressType: AddressType;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: TipoLogradouroService,
    private toastrService: NbToastrService,
    ) {

  }

  ngOnInit(): void {
    this.loadForm();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.service.salvar(this.form.value).subscribe(
      () => {
        this.voltar();
      },
      (error) => {
        this.showToast(`Esse valor está duplicado: ${error.error.error}`);
      },
    );
  }

  public loadForm() {
    if (sessionStorage.getItem(this.key) === null) {
      this.voltar();
    }

    this.addressType = JSON.parse( sessionStorage.getItem(this.key));
    sessionStorage.removeItem(this.key);

    this.createForm(this.addressType);
  }

  public createForm(addressType: AddressType) {
    this.form = new FormGroup({

      id: new FormControl(
        addressType.id, [
        Validators.required,
      ]),

      name: new FormControl(
        addressType.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      createdAt: new FormControl(
        addressType.createdAt, [
        Validators.required,
      ]),

    });
  }

  public voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public showToast(msg: string) {
    this.toastrService.danger(msg,  `Impossível completar`);
  }

  public getStatus(field: any): string {

    if (!this.submitted ) {
      return 'basic';
     }

     if (field.valid) {
       return 'success';
     }

     return 'danger';

  }

  public get name() {
    return this.form.get('name');
  }
}
