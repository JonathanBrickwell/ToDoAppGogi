import { Component, OnInit } from '@angular/core';

import { DbServiceService } from '../../services/db-service.service';
import { Plans } from 'src/app/models/plans';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  newPlans: Plans[];

  constructor(private plansService: DbServiceService) { }

  ngOnInit() {
    this.subscribeNewPlans();
  }

  subscribeNewPlans() {
    return this.plansService.getPlansData().subscribe(result => {
      this.newPlans = result;
      console.log(this.newPlans);
    });
  }

  removeThePlan(planItem) {
    this.plansService.deleteThePlan(planItem.id);
  }

}
