import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AbstractModel } from '../abstract-model';
import { Service } from './service';

export abstract class  DeleteComponent<T extends AbstractModel>  {

  public data: T;
  public abstract key(): string;
  private path: string = `${this.key()}[deletar]`;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: Service<T>,
    public toastrService: NbToastrService,
  ) {
  }

  public load() {
    if (sessionStorage.getItem(this.path) === null) {
      this.voltar();
    }

    this.data = JSON.parse( sessionStorage.getItem(this.path));
    sessionStorage.removeItem(this.path);
  }

  public voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public deletar(): void {
    this.service.delete(this.data.id).subscribe(
      () => {
        this.showToast(`registro deletado`);
        this.voltar();
      },
      (error) => {
        this.showToast(`${error.error.error}`);
      },
    );
  }

  public showToast(msg: string) {
    this.toastrService.danger(msg,  `Impossível completar`);
  }
}
