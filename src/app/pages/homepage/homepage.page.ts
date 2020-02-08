import { Component, OnInit } from '@angular/core';

import { DbServiceService } from '../../services/db-service.service';
import { Plans } from 'src/app/models/plans';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  newPlans: Plans[];
  selectedItedId: string;

  constructor(
    private plansService: DbServiceService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.subscribeNewPlans();
  }

  subscribeNewPlans() {
    return this.plansService.getPlansData().subscribe(result => {
      this.newPlans = result;
      console.log(this.newPlans);
    });
  }

  async deleteItemComfirmation(id: string) {
    this.selectedItedId = id;
    const alert = await this.alertController.create({
      header: 'Potvrdi',
      message: 'Potvrdite brisanje događaja.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.removeThePlan(this.selectedItedId);
          }
        }
      ]
    });
    await alert.present();
  }

  removeThePlan(planId) {
    this.plansService.deleteThePlan(planId);
  }

}
