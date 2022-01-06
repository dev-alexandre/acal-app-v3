import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AbstractModel } from '../abstract-model';
import { Service } from './service';

export class AddComponent <T extends AbstractModel> {

  public loading: boolean = false;
  public form: FormGroup;
  public submitted = false;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: Service<T>,
    public toastrService: NbToastrService,
    ) {}


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


}
