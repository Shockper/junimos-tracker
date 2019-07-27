import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewDashboardComponent } from './overview-dashboard/overview-dashboard.component';


const routes: Routes = [
  {
    path: 'overview',
    component: OverviewDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
