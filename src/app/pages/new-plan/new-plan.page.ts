import { Component, OnInit } from '@angular/core';

import { DbServiceService } from '../../services/db-service.service';
import { Plans } from 'src/app/models/plans';
import { Categories } from 'src/app/models/plan-categories/categories.model';

import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.page.html',
  styleUrls: ['./new-plan.page.scss'],
})
export class NewPlanPage implements OnInit {

  newPlan: Plans;
  categories = [
    { name: 'Dinner' },
    { name: 'Movie Night' },
    { name: 'Date Night' },
    { name: 'Coffee' }
  ];

  title: any;
  date: any;
  location: any;
  time: any;
  category: any;

  constructor(
    private plansService: DbServiceService,
    private alertController: AlertController,
    private toastController: ToastController
    ) { }

  ngOnInit() {
  }

  validateUserInput() {
    if (this.title) {
      this.newPlan = {
        title: this.title,
        date: this.date,
        location: this.location,
        time: this.time,
        category: this.category
      };
      this.addNewPlan();
      this.successMessage();
    } else {
      this.alertMessage();
    }
  }

  async alertMessage() {
    const alert = await this.alertController.create({
      header: 'Oprez!',
      subHeader: 'Nedovoljno podataka',
      message: 'Molimo unesite barem Ime Događaja, Vrijeme i Lokaciju. Hvala.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async successMessage() {
    const toast = await this.toastController.create({
      message: 'Novi plan je dodan!',
      duration: 8000,
      position: 'bottom',
      color: 'success',
      buttons: ['OK']
    });
    toast.present();
  }

  addNewPlan() {
    this.plansService.createNewPlan(this.newPlan);
  }

  
}
