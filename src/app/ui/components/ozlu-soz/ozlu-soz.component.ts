import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-ozlu-soz',
  templateUrl: './ozlu-soz.component.html',
  styleUrls: ['./ozlu-soz.component.scss']
})
export class OzluSozComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService) {
    super(spinner);
   }


  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }
}
