import { Component } from '@angular/core';
import { VkeService, VKEModel } from '../../../services/vke.service';

@Component({
  selector: 'app-vke',
  templateUrl: './vke.component.html',
  styleUrls: ['./vke.component.scss'],
})
export class VkeComponent {
  boy: number | null = null;
  kilo: number | null = null;
  sonuc: string = '';

  constructor(private vkeService: VkeService) {}

  hesapla() {
    if (this.boy && this.kilo && this.boy > 0 && this.kilo > 0) {
      const model: VKEModel = { boy: this.boy, kilo: this.kilo };
      this.vkeService.hesapla(model).subscribe(
        (data) => {
          this.sonuc = `Vücut Kitle Endeksi (VKE): ${data.vke.toFixed(2)}\n Durum: ${data.sonuc}`;
        },
        (error) => {
          alert(error.error || 'Hesaplama sırasında bir hata oluştu.');
        }
      );
    } else {
      alert('Lütfen geçerli bir Boy ve Kilo değeri girin.');
    }
  }


  reset() {
    this.boy = null;
    this.kilo = null;
    this.sonuc = '';
  }
}
