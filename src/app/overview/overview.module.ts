import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewDashboardComponent } from './overview-dashboard/overview-dashboard.component';

@NgModule({
  declarations: [OverviewDashboardComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
