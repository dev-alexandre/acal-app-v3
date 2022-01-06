import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '@app/@shared/model/place/place.model';
import { DeleteComponent } from '@app/@shared/model/structure/delete-component';
import { NbToastrService } from '@nebular/theme';
import { PlaceService } from '../service/place.service';
import { AddressPipe } from '../../../../@shared/pipe/address.pipe';

@Component({
  templateUrl: './place-delete.component.html',
})
export class PlaceDeleteComponent extends DeleteComponent<Place> implements OnInit {

  public addressLabel: String = '';

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: PlaceService,
    public toastrService: NbToastrService,
    public addressPipe: AddressPipe,
  ) {
    super(
      router,
      activeRouter,
      service,
      toastrService,
    );
  }

  ngOnInit(): void {
    super.load();
    this.addressLabel = this.addressPipe.transform(this.data.address);
  }

  public key(): string {
      return `[place]`;
  }



}
