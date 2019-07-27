import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDashboardComponent } from './overview-dashboard.component';
import { Store, StoreModule } from '@ngrx/store';

describe('OverviewDashboardComponent', () => {
  let component: OverviewDashboardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      declarations: [OverviewDashboardComponent],
      providers: [Store]
    });

    component = TestBed.createComponent(OverviewDashboardComponent).componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
