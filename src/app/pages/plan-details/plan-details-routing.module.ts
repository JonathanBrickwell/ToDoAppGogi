import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanDetailsPage } from './plan-details.page';

const routes: Routes = [
  {
    path: '',
    component: PlanDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanDetailsPageRoutingModule {}
