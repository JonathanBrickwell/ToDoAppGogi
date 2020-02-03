import { Component, OnInit } from '@angular/core';

import { DbServiceService } from '../../services/db-service.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.page.html',
  styleUrls: ['./new-plan.page.scss'],
})
export class NewPlanPage implements OnInit {

  category: string;
  decription: string;
  location: string;
  time: string;
  title: string;

  newPlan = {
      category: 'restaurant',
      description: 'Maaaa dodi samo!',
      location: 'Moj krevet',
      time: '01.02.2020',
      title: 'Kava'
    };


  constructor(private plansService: DbServiceService) { }

  ngOnInit() {
  }

  addNewPlan() {
    this.plansService.createNewPlan(this.newPlan);
  }
}
