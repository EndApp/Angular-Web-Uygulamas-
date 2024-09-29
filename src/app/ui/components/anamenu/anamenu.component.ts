import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-anamenu',
  templateUrl: './anamenu.component.html',
  styleUrls: ['./anamenu.component.scss']
})
export class AnamenuComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService) {
    super(spinner);
   }


  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }

}
