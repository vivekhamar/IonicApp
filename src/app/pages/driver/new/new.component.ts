import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  public orderList: any = [
    {
      name: "Vivek Khamar",
      district: "Gandhinagar",
      date: "21/06/2021",
      time: "13:45",
      requestId: "100"
    },
    {
      name: "Neel Khamar",
      district: "Ahmedabad",
      date: "17/06/2021",
      time: "21:35",
      requestId: "101"
    }
  ];

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: OrderDetailsComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
