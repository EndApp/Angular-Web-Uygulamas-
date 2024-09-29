import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

//html css e gerek yok sadece sınıfı yeterlı olucak
export class BaseComponent{
constructor(private spinner:NgxSpinnerService){

 }

 showSpinner(SpinnerNameType:SpinnerType){
  this.spinner.show(SpinnerNameType);
  setTimeout(()=> this.hideSpinner(SpinnerNameType),1000); //1sn durup kapansın
  }
 //metınsel parametrelerı secılebılır hale getırelımkı daha sonra bakınca unutmayalım


 hideSpinner(SpinnerNameType:SpinnerType){
this.spinner.hide(SpinnerNameType);
 }
}
export enum SpinnerType{
  BallAtom="s1",
  BallScaleMultiple="s2",
  BallSpinClockwiseFadRotatings="s3"
}
