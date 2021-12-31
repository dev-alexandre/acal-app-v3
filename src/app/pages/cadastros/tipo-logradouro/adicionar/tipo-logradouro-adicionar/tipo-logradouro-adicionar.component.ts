import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ignoreElements } from 'rxjs-compat/operator/ignoreElements';
import { TipoLogradouroService } from '../../tipo-logradouro.service';

@Component({
  selector: 'ngx-tipo-logradouro-adicionar',
  templateUrl: './tipo-logradouro-adicionar.component.html',
})
export class TipoLogradouroAdicionarComponent implements OnInit {

  public loading: boolean = false;
  public form: FormGroup;
  public submitted = false;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: TipoLogradouroService,
    private toastrService: NbToastrService,
    ) {

  }

  ngOnInit(): void {
    this.createForm();
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

  public createForm() {
    this.form = new FormGroup({
      name: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
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
