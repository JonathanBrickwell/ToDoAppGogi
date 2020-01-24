import { Component, OnInit } from '@angular/core';

import { DbServiceService } from '../../services/db-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  plans = [];

  constructor(private plansService: DbServiceService) { }

  ngOnInit() {
    this.subscribeToPlans();
  }

  subscribeToPlans() {
    return this.plansService.getPlans().subscribe(data => {
      this.plans = data.map(result => {
        return {
          id: result.payload.doc.id,
          plan: result.payload.doc.data()
        };
      });
      this.iterateThroughPlans();
    });
  }

  iterateThroughPlans() {
      console.log('Ovo je čisti answers objekt: ', this.plans);
      return this.plans.forEach(element => {
        console.log(element.plan);
      });
  }
}
