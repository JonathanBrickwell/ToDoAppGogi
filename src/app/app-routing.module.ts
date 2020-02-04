import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'new-plan',
    loadChildren: () => import('./pages/new-plan/new-plan.module').then( m => m.NewPlanPageModule)
  },
  {
    path: 'plan-details',
    loadChildren: () => import('./pages/plan-details/plan-details.module').then( m => m.PlanDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
