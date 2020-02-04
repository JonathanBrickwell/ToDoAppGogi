import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanDetailsPageRoutingModule } from './plan-details-routing.module';

import { PlanDetailsPage } from './plan-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanDetailsPageRoutingModule
  ],
  declarations: [PlanDetailsPage]
})
export class PlanDetailsPageModule {}
