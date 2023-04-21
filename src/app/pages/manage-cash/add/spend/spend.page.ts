import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.page.html',
  styleUrls: ['./spend.page.scss'],
})
export class SpendPage implements OnInit {
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async saveDraftAlert() {
    const alert = await this.alertController.create({
      header: 'Lưu bản nhập này dưới dạng bản nháp?',
      message: 'Nếu bỏ bây giờ, bạn sẽ mất bản nhập này.',
      cssClass: 'save-alert__draft',
      buttons: [
        {
          text: 'Hủy bỏ',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Lưu bản nháp',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

  isModalRequireOpen = false;

  setOpenModalRequire(isOpen: boolean) {
    this.isModalRequireOpen = isOpen;
  }
}
