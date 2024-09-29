import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { TodoService } from 'src/app/services/common/models/todo.service';
//herhangı bır sayfade X sılme sımgesı ıcın dırectıve
declare var $:any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element:ElementRef,
    private _renderer:Renderer2,
    private todoService:TodoService,
  ) {
    const img= _renderer.createElement("img");
    img.setAttribute("src","../../../../../assets/delete.png");
    img.setAttribute("style","cursor:pointer;");//uzerıne gelıncee el cıksın
    img.width=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement,img);
  }

 @Input() id:string;
  @HostListener("click")

  async onclick(){
  const td: HTMLTableCellElement = this.element.nativeElement;
  this.todoService.delete(this.id);
  $(td.parentElement).fadeOut(2000);

}
}
