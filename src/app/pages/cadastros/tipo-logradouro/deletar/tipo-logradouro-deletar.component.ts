import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { NbToastrService } from '@nebular/theme';
import { TipoLogradouroService } from '../tipo-logradouro.service';

@Component({
  selector: 'ngx-tipo-logradouro-deletar',
  templateUrl: './tipo-logradouro-deletar.component.html',
  styleUrls: ['./tipo-logradouro-deletar.component.scss']
})
export class TipoLogradouroDeletarComponent implements OnInit {

  public addressType: AddressType;
  private key: string = `[address-type][deletar]`

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: TipoLogradouroService,
    private toastrService: NbToastrService,
  ) {
  }

  ngOnInit(): void {

    if (sessionStorage.getItem(this.key) === null){
      this.voltar();
    }

    this.addressType = JSON.parse( sessionStorage.getItem(this.key) )
    sessionStorage.removeItem(this.key);
  }

  public voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public deletar(): void {
    this.service.deletar(this.addressType.id).subscribe(
      () => {
        this.showToast(`registro apagado deletado`);
        this.voltar();
      },
      (error) => {
        this.showToast(`${error.error.error}`);
      }
    );
  }

  public showToast(msg: string) {
    this.toastrService.danger(msg,  `Impossível completar`);
  }

}
