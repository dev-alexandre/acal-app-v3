import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AbstractModel } from '../abstract-model';
import { Service } from './service';

export abstract class EditComponent<T extends AbstractModel> {

  public abstract key(): string;
  private path: string = `${this.key()}[editar]`;

  public loading: boolean = false;
  public form: FormGroup;
  public submitted = false;
  public data: T;

  public abstract createForm(data: T): void;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: Service<T>,
    public toastrService: NbToastrService,
    ) {

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.service.save(this.form.value).subscribe(
      () => {
        this.voltar();
      },
      (error) => {
        this.showToast(`Esse valor está duplicado: ${error.error.error}`);
      },
    );
  }

  public compareById(v1: AbstractModel, v2: AbstractModel): boolean {
    return v1?.id === v2?.id;
  }

  public loadForm() {
    if (sessionStorage.getItem(this.path) === null) {
      this.voltar();
    }

    this.data = JSON.parse( sessionStorage.getItem(this.path));
    sessionStorage.removeItem(this.path);

    this.createForm(this.data);
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
